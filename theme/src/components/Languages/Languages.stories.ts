import { Meta, StoryObj } from '@storybook/vue3';
import Languages from './Languages.vue';

const meta: Meta<typeof Languages> = {
  title: 'Components/Languages',
  component: Languages,
  argTypes: {
    languages: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof Languages>;

export const Default: Story = {
  args: {
    title: 'Languages',
    languages: [
      {
        language: 'Français',
        fluency: 'Langue maternelle'
      },
      {
        language: 'Anglais',
        fluency: 'Professionnel'
      },
      {
        language: 'Italien',
        fluency: 'Professionnel'
      },
      {
        language: 'Allemand',
        fluency: 'Professionnel'
      },
      {
        language: 'Chinois',
        fluency: 'Professionnel'
      }
    ]
  }
};
