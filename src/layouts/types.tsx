export type LayoutProps = {
  title:string;
  description?:string;
  children: React.ReactNode
}

export type FormData = {
  name: string;
  email:string;
  companyorindividual:string;
  content:string;
  privacy:unknown;
}
