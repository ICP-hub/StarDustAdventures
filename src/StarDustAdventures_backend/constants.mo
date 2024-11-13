import Nat "mo:base/Nat";
module{
    public let PRIZE_DECIMALS:Nat=4;

    public let ERRORS={
        userNotFound="User not found";
        anonymous="anonymous users are not allowed";
        useralreadyExists="User already exists with id : ";
        cannotUpdateOtherUser="You cannot update someone else's profile";
    };

    public let RESPONSES={
        disabledUser="User successfully disabled";
    };
}