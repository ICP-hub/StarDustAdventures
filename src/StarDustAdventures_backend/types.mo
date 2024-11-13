import Principal "mo:base/Principal";
module{

    public type UserStatus={
        #active;
        #disabled;
    };

    public type User={
        name:Text;
        id:Principal;
        points:Nat;
        clickLimitHour:Nat;
        prizePerHour:Nat;
        status:UserStatus;
    }
}