import React from "react";

interface Friend {
  id: string;
  name: string;
  icon: string; // Changed from icons to icon
}

const FriendsList: React.FC = () => {
  // Mock friends data inside the component
  const friends: Friend[] = [
    { id: "1", name: "ABCD", icon: "/assets/character.svg" }, // Fixed syntax
    { id: "2", name: "JKLM", icon: "/assets/character.svg" }, // Fixed syntax
  ];

  const handleRefresh = () => {
    console.log("Refreshing friends list...");
  };

  return (
    <div className="flex justify-start w-full">
      <div className="space-y-2 w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-coin">
            List of your friends ({friends.length})
          </h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={handleRefresh}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-2">
          {friends.map((friend, index) => (
            <React.Fragment key={friend.id}>
              <div className="flex items-center gap-3 p-2">
                <img
                  src={friend.icon} // Use the icon from friend object
                  alt={`${friend.name}'s character`} // Improved alt text
                  className="character-image w-6 h-6" // Using Tailwind for dimensions
                  height={24}
                  width={24}
                />
                <span className="font-coin text-sm">{friend.name}</span>
              </div>
              {index < friends.length - 1 && (
                <div className="w-full border-t border-gray-600 my-8" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
