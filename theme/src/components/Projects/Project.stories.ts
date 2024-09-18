import { Meta, StoryObj } from '@storybook/vue3';
import Projects from './Projects.vue';

const meta: Meta<typeof Projects> = {
  title: 'Components/Projects',
  component: Projects,
  argTypes: {
    projects: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Projects>;

export const Default: Story = {
  args: {
    title: 'Projects',
    projects: [
      {
        name: 'Miss Direction',
        description: 'A mapping engine that misguides you',
        url: 'http://missdirection.example.com',
        highlights: [
          'Won award at AIHacks 2016',
          'Built by all women team of newbie programmers',
          'Using modern technologies such as GoogleMaps, Chrome Extension and Javascript'
        ],
        keywords: ['GoogleMaps', 'Chrome Extension', 'Javascript'],
        roles: ['Team lead', 'Designer']
      }
    ]
  }
};
