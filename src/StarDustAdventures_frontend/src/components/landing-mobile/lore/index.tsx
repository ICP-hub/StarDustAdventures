import React from 'react';


const StarDustUi = () => {
  return (
    <div className="min-h-screen bg-purple-950 text-white p-4 relative overflow-hidden">
      {/* Header */}
      <header className="relative flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold font-mono">
          Star Dust
          <br />
          Adventures
        </h1>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-mono hover:bg-purple-500 transition-colors">
          PLAY NOW
        </button>
      </header>

      {/* Main Content */}
      <main className="relative space-y-12">
        {/* Lore Section */}
        <section className="space-y-4">
          <h2 className="text-4xl font-mono mb-4 flex items-center gap-2">
            Lore and
            <br />
            Storyline
          </h2>
          <p className="text-gray-300">
            Explore the Epic Quest for Star Dust in a Distant Future
          </p>
        </section>

        {/* Commander Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-mono mb-2">
            Commander
            <br />
            Dom's Mission
          </h2>
          <p className="text-gray-300">
            Elite astronaut Commander Dom leads a mission to mine Star Dust and upgrade gear.
          </p>
        </section>

        {/* Challenges Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-mono mb-2">
            Challenges
            <br />
            Ahead
          </h2>
          <p className="text-gray-300">
            The mission involves navigating hostile planets & overcoming various obstacles.
          </p>
        </section>

      </main>
    </div>
  );
};

export default StarDustUi;