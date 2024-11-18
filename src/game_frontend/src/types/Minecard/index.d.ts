// TypeScript interfaces
interface CardDataType {
    id: number;
    title: string;
    subtitle: string;
    profitPerHour: number;
    clickPerHour: number;
    level: number;
    cost: number;
    
  }
  
  interface CardProps extends Omit<CardDataType, 'id'> {
    image?: string;
    icon?: string;
  }