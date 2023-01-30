import './mylabel.css';

export interface MyLabelProps {
    /**
     * Texto que tendra el Label
     */
    label: string;
    /**
     * Tamaño del Texto
     */
    size?: 'small' | 'medium' | 'normal' | 'high';
    /**
     * Texto en Mayusculas  
     */
    allCaps?: boolean;
    /**
     * Color del Texto
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color de Texto personalizado
     */
    fontColor?: string;
}

export const MyLabel = ( { 
    label = 'No label', size = 'normal', allCaps, color = 'primary', fontColor
}: MyLabelProps ) => {
  return (
    <span 
      className={`label ${size} text-${color}`} 
      style={{ color: fontColor && fontColor }}           
    >{ allCaps ? label.toUpperCase() : label }</span>
  )
}
