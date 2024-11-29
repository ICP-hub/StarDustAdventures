import Nat "mo:base/Nat";
module{
    public let PRIZE_DECIMALS:Nat=8;

    public let SECONDS_IN_HOUR = 3600;

    public let ERRORS={
        userNotFound="User not found";
        anonymous="anonymous users are not allowed";
        useralreadyExists="User already exists with id : ";
        cannotUpdateOtherUser="You cannot update someone else's profile";
        invalidReferral="The referral code is invalid, please check if the user with this referral exists or not";
    };

    public let RESPONSES={
        disabledUser="User successfully disabled";
        userAddedProblemWithReferral="User added but cannot update referral"
    };
}