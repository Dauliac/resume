import { Meta, StoryObj } from '@storybook/vue3';
import References from './References.vue';

const meta: Meta<typeof References> = {
  title: 'Components/References',
  component: References,
  argTypes: {
    references: { control: 'array' },
    title: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof References>;

export const Default: Story = {
  args: {
    title: 'References',
    references: [
      {
        name: 'John Doe',
        position: 'Senior Engineer',
        organization: 'Tech Corp',
        phone: '+33000000000',
        email: 'john.doe@techcorp.com',
        summary: 'John was an exceptional engineer at Tech Corp, leading multiple successful projects.'
      },
      {
        name: 'Jane Smith',
        position: 'CTO',
        organization: 'Innovatech',
        phone: '+33000000001',
        email: 'jane.smith@innovatech.com',
        summary: 'Jane has a deep understanding of technology and was instrumental in our cloud migration.'
      }
    ]
  }
};
