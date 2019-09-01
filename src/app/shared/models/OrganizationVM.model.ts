export class Organization {
    Id: number;
    BusinessType: number;
    OrganizationName: string;
    MainPhone: string;
    AddressLine1: string;
    AddressLine2: string;
    District: number;
    City: number;
    Email: string;
    /**This is the name of top responsible person in the company */
    FRPerson: string;
    /**This is the Email of top responsible person in the company */
    FRPEmail: string;
    /**This is the name of second responsible person in the company */
    SRPerson: string;
    /**This is the Email of second responsible person in the company */
    SRPEmail: string;
    /**This is the name of the person who mainly interact with the online system */
    HandlerName: string;
    /**This is the Email of the handler */
    HandlerEmail: string;
    /**This will indicate the given company buy or sell in the online system */
    IsSeller: boolean;

    IpAddress:string
    CreatedBy:string;
    ModifiedBy:string;
    CreatedWhen:Date;
    ModifiedWhen:Date;
}


export class UserVM
{
    Id: number;
    UserId: string;
    UserName: string;
    Password: string;
    DisplayName: string;
    Email: string;
    Phone: string;
    Address1: string;
    Address2: string;
    Address3: string;
    FirstName: string;
    LastName: string;
    JobTitle: string;
    TypeId: number;
    Activated: boolean;
    Approved: boolean;
    OrganizationID: number;
    GroupId: number;
    IsSupperUser: boolean;
    IpAddress:string
    CreatedBy:string;
    ModifiedBy:string;
    CreatedWhen:Date;
    ModifiedWhen:Date;

}


export interface OrgUserFullVM
{
    OrganisazionDet: Organization;
    UserDet: UserVM;
}
