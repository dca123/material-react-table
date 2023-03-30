import React from 'react';
import { Meta, Story } from '@storybook/react';
import MaterialReactTable, {
  type MaterialReactTableProps,
  type MRT_ColumnDef,
  createMRTColumnHelper,
} from 'material-react-table';
import { faker } from '@faker-js/faker';

const meta: Meta = {
  title: 'Prop Playground',
  component: MaterialReactTable,
};

export default meta;

const Template: Story<MaterialReactTableProps<Person>> = (
  args: MaterialReactTableProps<Person>,
) => <MaterialReactTable {...args} />;

export const Default = Template.bind({});

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
}

const helper = createMRTColumnHelper<Person>();

Default.args = {
  columns: [
    helper.accessor('firstName', {
      header: 'First Name with Accessor ',
    }),
    {
      header: 'Last Name',
      accessorKey: 'lastName',
    },
    {
      header: 'Age',
      accessorKey: 'age',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
  ] as MRT_ColumnDef<Person>[],
  data: [...Array(6)].map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: faker.datatype.number(80),
    address: faker.address.streetAddress(),
  })),
} as MaterialReactTableProps<Person>;
