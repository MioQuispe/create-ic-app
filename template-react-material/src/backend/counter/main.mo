actor {
    stable var currentValue: Nat = 0;

    public func increment(): async () {
        currentValue += 1;
    };

    public query func getValue(): async Nat {
        currentValue;
    };

    // Get query for hello world
    public query func hello() : async Text {
        return "Hello world from Internet Computer!";
    };
    // Get message for greeting
    public func greet(msg : Text) : async Text {
        return msg;
    };
};
