import WelcomeCard from '../components/WelcomeCard';
import Counter from '../components/Counter';
import StudentInfo from '../components/StudentInfo';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>React/Next.js Components Activity</h1>
      <WelcomeCard name="Student" />
      <Counter />
      <StudentInfo />
    </div>
  );
}
