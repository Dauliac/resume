import { Meta, StoryObj } from '@storybook/vue3';
import Interests from './Interests.vue';

const meta: Meta<typeof Interests> = {
  title: 'Components/Interests',
  component: Interests,
  argTypes: {
    interests: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Interests>;

export const Default: Story = {
  args: {
    title: 'Interests',
    interests: [
      {
        name: 'Sports',
        keywords: ['Escalade', 'Yoga', 'Musculation', 'Trekking']
      },
      {
        name: 'Gastronomie',
        keywords: []
      },
      {
        name: 'Cinéma',
        keywords: []
      },
      {
        name: 'Philosophie',
        keywords: []
      }
    ]
  }
};
