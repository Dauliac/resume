import { Meta, StoryObj } from '@storybook/vue3';
import Awards from './Awards.vue';

const meta: Meta<typeof Awards> = {
  title: 'Components/Awards',
  component: Awards,
  argTypes: {
    awards: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Awards>;

export const Default: Story = {
  args: {
    title: 'Notable Awards',
    awards: [
      {
        title: 'Best Developer Award',
        awarder: 'Tech World',
        date: '2024-09-08',
        summary: 'Awarded for outstanding contributions to software development.'
      },
      {
        title: 'Innovator of the Year',
        awarder: 'Innovation Hub',
        date: '2023-12-15',
        summary: 'Recognized for innovative solutions in the field of technology.'
      }
    ]
  }
};
