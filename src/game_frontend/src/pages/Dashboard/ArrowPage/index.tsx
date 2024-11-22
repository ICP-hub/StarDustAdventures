import React, { ReactNode } from 'react';


// Types
interface TokenIconProps {
  children: ReactNode;
}

interface SectionTitleProps {
  children: ReactNode;
}

interface TaskItemProps {
  icon: ReactNode;
  children: ReactNode;
  tokenCount: number;
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

// Components
const TokenIcon: React.FC<TokenIconProps> = ({ children }) => (
  <div className="bg-gray-800 p-2 rounded-full">
    {children}
  </div>
);

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-white text-sm font-medium text-left mb-2">
    {children}
  </h2>
);

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    <div className="bg-gray-800/50 rounded-lg overflow-hidden mb-6">
      {children}
    </div>
  </>
);

const TaskItem: React.FC<TaskItemProps> = ({ icon, children, tokenCount }) => (
  <div className="flex items-center justify-between py-4 px-4 border-b border-gray-700/30">
    <div className="flex items-center gap-3">
      <TokenIcon>{icon}</TokenIcon>
      <div className='flex flex-col'>
        <span className="text-white text-sm font-medium">{children}</span>
        <div className="flex items-center gap-1">

            <span>
                <img 
                    src="/assets/ufo.svg"
                    className="ufo-image"
                    loading="lazy"
                    alt="ufo"
                />
            </span>
        
            <span className="text-yellow-400 text-xs ">+{tokenCount}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <svg
        className="w-5 h-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
);

const Header: React.FC = () => (
  <div className="text-center mb-8">
    <div className="  rounded-full mx-auto flex items-center justify-center mb-3">
    <img 
        src="/assets/ufo.svg"
        className="ufo-image"
        loading="lazy"
        alt="ufo"
        width={40}
        height={40}
    /> 
    </div>
    <h1 className="text-white text-xl font-bold font-coin mb-6">Earn more tokens</h1>
  </div>
);

const ArrowPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto pt-8 px-4">
        <Header />
        
        <Section title="Hamster Youtube">
          <TaskItem icon='#' tokenCount={1} >
            <h4 className='font-coin'>Dominate Crpto Monitoring</h4>
          </TaskItem>
          <TaskItem icon='#' tokenCount={1}>
          <h4 className='font-coin'>C2 earn $24m a day?</h4>
          </TaskItem>
        </Section>

        <Section title="Tasks list">
          <TaskItem icon='#' tokenCount={1}>
            Follow us on Instagram
          </TaskItem>
          <TaskItem icon='#' tokenCount={1}>
            Join our TG channel
          </TaskItem>
          {/* <TaskItem icon={<Twitter className="w-5 h-5 text-white" />} tokenCount={1}>
            Follow our X account
          </TaskItem> */}
        </Section>
      </div>
    </div>
  );
};

export default ArrowPage;