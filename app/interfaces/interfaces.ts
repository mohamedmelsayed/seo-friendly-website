
// Define the type structure for sub-categories
export interface Category {
    id: number;
    slug: string;
    name: {
      ar: string; // Assuming the name has an Arabic version, adjust if necessary
      en: string; // Assuming the name has an Arabic version, adjust if necessary
    };
  }
  
  
export interface BlogPost {
    id: number;
    title: {
        ar: string; // Assuming the name has an Arabic version, adjust if necessary
        en: string; // Assuming the name has an Arabic version, adjust if necessary
      };
      content: {
        ar: string; // Assuming the name has an Arabic version, adjust if necessary
        en: string; // Assuming the name has an Arabic version, adjust if necessary
      };
    description: string;
    image: string;
    slug: string;
  }

  export interface PostGridProps {
    posts: BlogPost[];
  }
  
  export interface SubCategoriesProps {
    categories: Category[];
    loading: boolean;
  }
  