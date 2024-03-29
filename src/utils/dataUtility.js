import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import StarsIcon from '@mui/icons-material/Stars';

export const branchOptions = [
  { value: "accounting", label: "C" },
  { value: "accounting", label: "C++" },
  { value: "DM", label: "CSS" },
  { value: "IT", label: "Javascript" },
  { value: "soft-skills", label: "React" },
  { value: "finance", label: "Angular" },
  { value: "accounting", label: "MySQL" },
  { value: "accounting", label: "HTML" },
  { value: "accounting", label: "PHP" },
  { value: "accounting", label: "Python" },
];

export const industryOptions = [
  { value: "DM", label: "Digital Marketing" },
  { value: "IT", label: "IT" },
  { value: "soft-skills", label: "Soft skills" },
  { value: "finance", label: "Finance" },
  { value: "accounting", label: "Accounting" },
];

export const genderOptions = [
  { value: "1", label: "Male" },
  { value: "2", label: "Female" },
  { value: "3", label: "Other" },
];

export const topFeatures = [
  {
    id: 1,
    for: <CastForEducationIcon fontSize='large' />,
    title: "Empower Your Expertise and Earn Money",
    desc: "Share what you love and know with eager learners worldwide whilemaking money doing it. Our platform gives you a powerful spaceto showcase your skills, create engaging lessons, and designinteractive courses that captivate and inspire. Start earning byoffering your expertise and turn your passion into a rewardingopportunity. Join us today and take your teaching journey to thenext level!",
  },
  {
    id: 2,
    for: <StarsIcon fontSize='large' />,
    title: "Earn Recognition and Rewards",
    desc: "Our platform offers a strong feedback and rating system to enhance your profile. You'll receive recognition for your outstanding teaching, gain valuable insights from student and grow professionally within our thriving educational community",
  },
  {
    id: 3,
    
    for: <LocalLibraryIcon fontSize='large' />,
    title: "Discover Your Learning Journey",
    desc: "Begin your exciting learning journey with our smart kill-matching system. Whether you want to learn a new language, explore creative hobbies, or dive into different subjects, our platform connects you with passionate instructors who personalize their teaching to fit your unique goals.",
  },
];
