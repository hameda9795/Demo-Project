// ============================================
// De Gouden Boon - TypeScript Type Definitions
// Mobile-First Café Website
// ============================================

// --------------------------------------------
// Menu & Products
// --------------------------------------------

export type CategoryType = 'koffie' | 'lunch' | 'zoet' | 'drank';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: CategoryType;
  image: string;
  dietary: ('vegan' | 'vegetarian' | 'gluten-free' | 'lactose-free')[];
  popular?: boolean;
  customization?: {
    sizes?: { label: string; priceModifier: number; ml?: number }[];
    milkOptions?: { label: string; priceModifier: number; type: string }[];
    extras?: { label: string; priceModifier: number }[];
  };
}

export interface CartItem extends MenuItem {
  cartId: string;
  quantity: number;
  selectedSize?: string;
  selectedMilk?: string;
  selectedExtras?: string[];
  specialRequests?: string;
  unitPrice: number;
  totalPrice: number;
}

// --------------------------------------------
// Order & Cart
// --------------------------------------------

export type OrderType = 'pickup' | 'dine-in';
export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';

export interface Order {
  id: string;
  items: CartItem[];
  type: OrderType;
  status: OrderStatus;
  pickupTime?: string;
  tableNumber?: string;
  customerName: string;
  customerPhone: string;
  specialInstructions?: string;
  totalAmount: number;
  createdAt: string;
  estimatedReadyTime?: string;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
}

// --------------------------------------------
// Loyalty & Rewards
// --------------------------------------------

export interface LoyaltyCard {
  stamps: number;
  freeDrinksAvailable: number;
  totalDrinksPurchased: number;
  lastStampDate?: string;
}

export interface LoyaltyTransaction {
  id: string;
  type: 'stamp' | 'redeem';
  itemName?: string;
  date: string;
}

// --------------------------------------------
// User & Profile
// --------------------------------------------

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  favoriteItems: string[];
  orderHistory: Order[];
  loyaltyCard: LoyaltyCard;
  preferences: {
    defaultMilk?: string;
    defaultSize?: string;
    dietaryPreferences?: string[];
    notificationsEnabled: boolean;
  };
}

// --------------------------------------------
// Reservation
// --------------------------------------------

export interface Reservation {
  id: string;
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

// --------------------------------------------
// Busyness Indicator
// --------------------------------------------

export type BusynessLevel = 'quiet' | 'busy' | 'crowded';

export interface BusynessStatus {
  level: BusynessLevel;
  label: string;
  waitTimeMinutes: number;
  message: string;
  lastUpdated: string;
}

// --------------------------------------------
// Admin
// --------------------------------------------

export interface AdminStats {
  todayOrders: number;
  todayRevenue: number;
  pendingOrders: number;
  averagePrepTime: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  minStock: number;
  unit: string;
  lastRestocked: string;
}

// --------------------------------------------
// Blog
// --------------------------------------------

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: 'brewing' | 'beans' | 'barista' | 'news';
  readTimeMinutes: number;
}

// --------------------------------------------
// UI Components
// --------------------------------------------

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  height?: 'small' | 'medium' | 'large' | 'full';
}

export interface SwipeCardProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onTap?: () => void;
  className?: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

// --------------------------------------------
// Demo Data
// --------------------------------------------

export interface DemoContactInfo {
  phone: string;
  email: string;
  address: string;
  kvk: string;
  disclaimer: string;
}
