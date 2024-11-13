import TrieMap "mo:base/TrieMap";
import Principal "mo:base/Principal";
import Error "mo:base/Error";
import Constants "constants";
import Result "mo:base/Result";
import Types "types";
actor {
 
  let userMap=TrieMap.TrieMap<Principal,Types.User>(Principal.equal,Principal.hash);

  public shared({caller}) func createUser(user:Types.User):async Result.Result<Types.User,Text>{
    try{
      let oldUser=userMap.get(caller);
      
      if(oldUser!=null){
        return #err(Constants.ERRORS.useralreadyExists # Principal.toText(caller));
      };
      
      let newUser:Types.User={
        id=caller;
        name=user.name;
        points=0;
        clickLimitHour=1000;
        prizePerHour=300;
        status=#active;
      };

      userMap.put(caller,newUser);

      return #ok(newUser)
    }catch(err){
      return #err(Error.message(err));
    }
  };

  public shared({caller}) func updateUser(user:Types.User):async Result.Result<Types.User,Text>{
    try{
      let oldUser=userMap.get(caller);
      
      switch(oldUser) {
        case(null) { 
          return #err(Constants.ERRORS.userNotFound)
        };
        case(?val) {

          if(caller!=val.id){
            return #err(Constants.ERRORS.cannotUpdateOtherUser)
          };

          let updatedUser:Types.User={
            id=caller;
            name=user.name;
            points=val.points;
            clickLimitHour=val.clickLimitHour;
            prizePerHour=val.prizePerHour;
            status=user.status;
          };
          ignore userMap.replace(caller,updatedUser);
          return #ok(updatedUser)
        };
      };
    }catch(err){
      return #err(Error.message(err));
    }
  };

  public shared({caller}) func disableUser():async Result.Result<Text,Text>{
    try{
      let oldUser=userMap.get(caller);
      
      switch(oldUser) {
        case(null) { 
          return #err(Constants.ERRORS.userNotFound)
        };
        case(?val){

          if(caller!=val.id){
            return #err(Constants.ERRORS.cannotUpdateOtherUser)
          };

          let user:Types.User={
            id=caller;
            name=val.name;
            points=val.points;
            clickLimitHour=val.clickLimitHour;
            prizePerHour=val.prizePerHour;
            status=#disabled;
          };

          ignore userMap.replace(caller,user);
          return #ok(Constants.RESPONSES.disabledUser);
        }
      }
    }catch(err){
      return #err(Error.message(err));
    }
  };

  func addPointsToUser(id:Principal,points:Nat):async Result.Result<(),Text>{
    try{
      let oldUser=userMap.get(id);
      switch(oldUser) {
        case(null) { return #err(Constants.ERRORS.userNotFound) };
        case(?val) {
          let user:Types.User={
            id=id;
            name=val.name;
            points=val.points + points;
            clickLimitHour=val.clickLimitHour;
            prizePerHour=val.prizePerHour;
            status=val.status;
          };

          ignore userMap.replace(id,user);
          return #ok();
        };
      };
    }catch(err){
      return #err(Error.message(err));
    }
  };
  
  public shared query({caller}) func whoami():async Text{
    return Principal.toText(caller);
  };
};
