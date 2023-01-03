import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import CustomStudioNavbar from './components/CustomStudioNavbar';
import Logo from './components/Logo';
import { myTheme } from './theme';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;



export default defineConfig({
  basePath: '/studio',
  name: 'AviDev_Content_Studio',
  title: 'AviDev Content Studio',
  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: CustomStudioNavbar,
    }
  },
  theme: myTheme
})