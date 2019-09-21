import { Injectable } from '@angular/core';
import { User } from 'src/app/auth/_models/user.models';

@Injectable()
export class UserDataservice {

    public GetOrganizationName() {
        return localStorage.getItem("OrgName").toString();
    }

    public GetOrganizationId() {
        return localStorage.getItem("OrgId").toString();
    }
    public GetLoggedUserIDInteger() {
        return localStorage.getItem("UserIdInt32").toString();
    }
    public GetUserId() {
        return localStorage.getItem("UserId").toString();
    }
    public GetUserName() {
        return localStorage.getItem("CurrentUserName").toString();
    }

    
}