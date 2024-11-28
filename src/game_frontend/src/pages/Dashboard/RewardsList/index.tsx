import { Section, TaskItem } from "../../../components/ui/TaskCard";
import "./index.css";

const Header = () => (
  <div className="header-container">
    <div className="header-image-wrapper">
      <img
        src="/assets/ufo.svg"
        loading="lazy"
        alt="ufo"
        width={90}
        height={90}
      />
    </div>
    <h1 className="header-title">Earn more tokens</h1>
  </div>
);

// Data structure for tasks
const YOUTUBE_TASKS = [
  { title: "Dominate Crpto Monitoring", tokenCount: 1 },
  { title: "C2 earn $24m a day?", tokenCount: 1 },
];

const SOCIAL_TASKS = [
  { title: "Follow us on Instagram", tokenCount: 1 },
  { title: "Join our TG channel", tokenCount: 1 },
];

// Main component
const RewardsList = () => {
  return (
    <div className="rewards-container">
      <div className="rewards-inner">
        <Header />

        <Section title="Hamster Youtube" className="section-title">
          {YOUTUBE_TASKS.map((task, index) => (
            <TaskItem key={index} icon="#" tokenCount={task.tokenCount}>
              <h4 className="task-title">{task.title}</h4>
            </TaskItem>
          ))}
        </Section>

        <Section title="Tasks list" className="section-title">
          {SOCIAL_TASKS.map((task, index) => (
            <TaskItem key={index} icon="#" tokenCount={task.tokenCount}>
              <h4 className="task-title">{task.title}</h4>
            </TaskItem>
          ))}
        </Section>
      </div>
    </div>
  );
};

export default RewardsList;
