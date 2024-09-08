import type { Meta, StoryObj } from '@storybook/vue3';
import SystemComponent from './System.vue';

const meta: Meta = {
  title: 'Design Tokens/System',
};

export default meta;

export const Default: StoryObj<typeof SystemComponent> = {
  render: () => ({
    components: { SystemComponent },
    template: '<SystemComponent />',
  }),
};
