import { Meta, StoryObj } from '@storybook/vue3';
import All from './All.vue';

const meta: Meta<typeof All> = {
  title: 'Components/All',
  component: All,
  argTypes: {
    all: {},
  }
};

export default meta;

type Story = StoryObj<typeof All>;

export const Default: Story = {
  args: {
    basics: {
      label: "John Doe",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Franz_Kafka%2C_1923.jpg",
      email: "johndoe@fake.me",
      phone: "+33000000",
      url: "https://johndoe.com",
      summary: "Sed odio nisl, vestibulum ac leo ac, cursus lacinia dui. Nam finibus tellus ac nisi iaculis, at eleifend purus volutpat. Mauris porttitor lectus facilisis, maximus erat et, tempor ipsum. Mauris nulla mi, hendrerit vel fringilla et, bibendum quis quam. Aliquam sed mauris in odio mattis placerat in a mi. Sed eu turpis ac lacus pharetra tincidunt. Sed odio nisl, vestibulum ac leo ac, cursus lacinia dui. Nam finibus tellus ac nisi iaculis, at eleifend purus volutpat. Mauris porttitor lectus facilisis, maximus erat et, tempor ipsum. Mauris nulla mi, hendrerit vel fringilla et, bibendum quis quam. Aliquam sed mauris in odio mattis placerat in a mi. Sed eu turpis ac lacus pharetra tincidunt. Sed odio nisl, vestibulum ac leo ac, cursus lacinia dui. Nam finibus tellus ac nisi iaculis, at eleifend purus volutpat. Mauris porttitor lectus facilisis, maximus erat et, tempor ipsum. Mauris nulla mi, hendrerit vel fringilla et, bibendum quis quam. Aliquam sed mauris in odio mattis placerat in a mi. Sed eu turpis ac lacus pharetra tincidunt. Sed odio nisl, vestibulum ac leo ac, cursus lacinia dui. Nam finibus tellus ac nisi iaculis, at eleifend purus volutpat. Mauris porttitor lectus facilisis, maximus erat et, tempor ipsum. Mauris nulla mi, hendrerit vel fringilla et, bibendum quis quam. Aliquam sed mauris in odio mattis placerat in a mi.",
      location: {
        city: "Bordeaux",
        countryCode: "FR"
      },
      profiles: [
        {
          network: "LinkedIn",
          username: "John Doe",
          url: "https://www.linkedin.com/in/johndoe/"
        },
        {
          network: "GitHub",
          username: "johndoe",
          url: "https://github.com/johndoe"
        }
      ]
    },
    skills: [
      {
        name: "JavaScript",
        level: "Advanced",
        keywords: ["ES6", "Vue.js", "Node.js"]
      },
      {
        name: "Python",
        level: "Intermediate",
        keywords: ["Flask", "Django"]
      }
    ],
    education: [
      {
        institution: "Harvard University",
        url: "https://www.harvard.edu",
        area: "Computer Science",
        studyType: "Bachelor's",
        startDate: "2015-09-01",
        endDate: "2019-06-01",
        courses: ["CS50", "Data Structures", "Algorithms"]
      }
    ],
    projects: [
      {
        name: "Personal Website",
        description: "A personal portfolio website to showcase my projects.",
        url: "https://johndoe.com",
        highlights: ["Built with Vue.js", "Responsive design"],
        keywords: ["Vue.js", "JavaScript", "CSS"],
        roles: ["Frontend Developer", "Designer"]
      }
    ],
    awards: [
      {
        title: "Employee of the Month",
        awarder: "TechCorp",
        date: "2020-07-01",
        summary: "Recognized for outstanding performance and teamwork."
      }
    ],
    publications: [
      {
        name: "Vue.js for Beginners",
        publisher: "Tech Press",
        releaseDate: "2021-04-15",
        url: "https://example.com/vuejs-for-beginners",
        summary: "An introductory guide to Vue.js for new developers."
      }
    ],
    languages: [
      {
        language: "English",
        fluency: "Native"
      },
      {
        language: "French",
        fluency: "Fluent"
      },
      {
        language: "Spanish",
        fluency: "Intermediate"
      }
    ],
    interests: [
      {
        name: "Photography",
        keywords: ["landscape", "portraits", "nature"]
      },
      {
        name: "Travel",
        keywords: ["backpacking", "culture", "adventure"]
      }
    ],
    references: [
      {
        name: "Jane Smith",
        position: "Manager",
        organization: "TechCorp",
        phone: "+123456789",
        email: "janesmith@techcorp.com",
        summary: "John was a fantastic employee, always delivering on time and with great quality."
      }
    ]
  }
};
