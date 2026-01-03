export class InMemorySkillExchangeRequestRepository extends SkillExchangeRequestRepository {
    constructor() {
        super();
        this.requests = [];
    }
    addRequest(request) {
        this.requests.push(request);
    }
    getRequestsByUserId(userid) {
        return this.requests.filter((request) => request.userid === userid);
    }
    getRequestById(requestid) {
        return this.requests.find((request) => request.requestid === requestid);
    }
}