function SkillExchangeRequestSystem(requestid,userid,target_id,offered_skill_id,requested_skill_id,status) {
    this.requestid = requestid;
    this.userid = userid;
    this.target_id = target_id;
    this.offered_skill_id = offered_skill_id;
    this.requested_skill_id = requested_skill_id;
    this.status = status; // e.g., 'pending', 'accepted', 'rejected'
}
export {SkillExchangeRequestSystem};