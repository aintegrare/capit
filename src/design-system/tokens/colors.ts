export const colors = {
  // Brand Colors
  brand: {
    primary: '#1E3A5F',      // Azul petróleo principal
    secondary: '#2A4A6B',    // Azul aço
    accent: '#49679f',       // Azul ardósia
    tertiary: '#CC5500',     // Laranja como cor de destaque
    lightBlue: '#87CEEB',    // Azul claro para destaques pontuais
    lightOrange: '#FFB366',  // Laranja claro para destaques pontuais
  },
  
  // Semantic Colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#1E3A5F',        // Usando azul principal para info
  },
  
  // Neutral Colors
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
    dark: '#1E3A5F',        // Usando azul escuro para fundo dark
  },
  
  // Text Colors
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    tertiary: '#6B7280',
    inverse: '#FFFFFF',
    brand: '#1E3A5F',       // Mantendo azul para texto da marca
  }
} as const;

export type ColorToken = typeof colors;
