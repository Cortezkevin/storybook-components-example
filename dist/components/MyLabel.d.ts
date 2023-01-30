/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
