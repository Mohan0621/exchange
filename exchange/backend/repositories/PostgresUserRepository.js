import { pool } from './db.js';
import { UserRepository } from '../repositories/UserRepository.js';
import { User } from '../entities/user.js';
import { Skill } from '../entities/skill.js';
export class PostgresUserRepository extends UserRepository {

    async addUser(user) {
        await pool.query(
            `INSERT INTO users (id, name, email, rating)
             VALUES ($1, $2, $3, $4)`,
            [user.id, user.name, user.email ?? null, user.rating]
        );

        for (const skill of user.skills) {
            await pool.query(
                `INSERT INTO user_skills (user_id, skill_id)
                 VALUES ($1, $2)`,
                [user.id, skill.id]
            );
        }

        for (const skill of user.skillswanted) {
            await pool.query(
                `INSERT INTO user_wanted_skills (user_id, skill_id)
                 VALUES ($1, $2)`,
                [user.id, skill.id]
            );
        }
    }

    async getUserById(id) {
        const userRes = await pool.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        );

        if (userRes.rows.length === 0) return null;

        const userRow = userRes.rows[0];

        const skillsRes = await pool.query(
            `SELECT s.id, s.name
             FROM skills s
             JOIN user_skills us ON s.id = us.skill_id
             WHERE us.user_id = $1`,
            [id]
        );

        const wantedRes = await pool.query(
            `SELECT s.id, s.name
             FROM skills s
             JOIN user_wanted_skills uw ON s.id = uw.skill_id
             WHERE uw.user_id = $1`,
            [id]
        );

        return new User(
            userRow.id,
            userRow.name,
            userRow.rating,
            skillsRes.rows.map(r => new Skill(r.id, r.name)),
            wantedRes.rows.map(r => new Skill(r.id, r.name))
        );
    }

    async getAllUsers() {
        const usersRes = await pool.query(`SELECT * FROM users`);
        const users = [];

        for (const row of usersRes.rows) {
            const skillsRes = await pool.query(
                `SELECT s.id, s.name
                 FROM skills s
                 JOIN user_skills us ON s.id = us.skill_id
                 WHERE us.user_id = $1`,
                [row.id]
            );

            const wantedRes = await pool.query(
                `SELECT s.id, s.name
                 FROM skills s
                 JOIN user_wanted_skills uw ON s.id = uw.skill_id
                 WHERE uw.user_id = $1`,
                [row.id]
            );

            users.push(
                new User(
                    row.id,
                    row.name,
                    row.rating,
                    skillsRes.rows.map(r => new Skill(r.id, r.name)),
                    wantedRes.rows.map(r => new Skill(r.id, r.name))
                )
            );
        }

        return users;
    }
}