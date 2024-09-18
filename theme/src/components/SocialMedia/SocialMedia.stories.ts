import { Meta, StoryObj } from '@storybook/vue3';
import SocialMedia from './SocialMedia.vue';

const meta: Meta<typeof SocialMedia> = {
  title: 'Components/SocialMedia',
  component: SocialMedia,
  argTypes: {
    profiles: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof SocialMedia>;

export const Default: Story = {
  args: {
    title: 'Social Media',
    profiles: [
      {
        network: 'LinkedIn',
        username: 'Julien Dauliac',
        url: 'https://www.linkedin.com/in/julien-dauliac-26a577135/'
      },
      {
        network: 'GitHub',
        username: 'Dauliac',
        url: 'https://github.com/Dauliac'
      }
    ]
  }
};
