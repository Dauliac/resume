import { Meta, StoryObj } from '@storybook/vue3';
import Skills from './Skills.vue';

const meta: Meta<typeof Skills> = {
  title: 'Components/Skills',
  component: Skills,
  argTypes: {
    skills: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Skills>;

export const Default: Story = {
  args: {
    title: 'Skills',
    skills: [
      {
        name: 'SRE',
        level: 'Expert',
        keywords: ['DevOps', 'CI/CD', 'Build system', 'Observabilité', 'Linux', 'Containers', 'AWS', 'Infrastructure', 'Nix', 'Golang']
      },
      {
        name: 'Architecture Logicielle',
        level: 'Avancé',
        keywords: ['DDD', 'Software Craftmanship', 'Microservices', 'Monolithes', 'Refactoring']
      },
      {
        name: 'Langages/Infrastructure as Code',
        level: 'Avancé',
        keywords: ['Ansible', 'Typescript', 'Rust', 'Kubernetes', 'Containers', 'Lambda']
      },
      {
        name: 'Scientifique',
        level: 'Intermédiaire',
        keywords: ['Programmation parallèle', 'Programmation kernel', 'Deep Learning']
      }
    ]
  }
};
