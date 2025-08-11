# Gemverse
- 콘텐츠 저장 및 AI 자동 정리
- 관심 콘텐츠 큐레이션
- 관심 콘텐츠 연관 서비스 견인
# Gemverse App - Figma Design Specifications

## 🎨 Design System

### Color Palette
```
Brand Colors:
• Primary: #56E1E9 (Turquoise)
• Secondary: #202C6C (Navy Blue)  
• Accent: #BB63FF (Purple)

Text Colors:
• Primary Text: #171719
• Secondary Text: #666666
• Tertiary Text: #999999
• White Text: #FFFFFF

Background Colors:
• Primary BG: #FFFFFF
• Secondary BG: #F7F7F8
• Hover BG: #E8F0FE

Border Colors:
• Light Border: #E0E6ED
• Medium Border: #F0F0F0

Status Colors:
• Success: #4CAF50
• Error: #FF6B6B
• Warning: #FF9800

Gradients:
• Brand Gradient: Linear 45° → #56E1E9 (0%) → #7597DF (50%) → #9596F4 (100%)
• Text Overlay: Linear 90° → rgba(0,0,0,0.7) (100%) → transparent (0%)
```

### Typography Scale
```
H1 Display: 24px, Weight 700, Line Height 1.2
H2 Title: 18px, Weight 700, Line Height 1.3  
H3 Subtitle: 16px, Weight 600, Line Height 1.4
Body Large: 14px, Weight 500, Line Height 1.5
Body Medium: 14px, Weight 400, Line Height 1.5
Body Small: 12px, Weight 400, Line Height 1.4
Caption: 10px, Weight 400, Line Height 1.3
Status Time: 17px, Weight 500, Line Height 1.2
```

### Spacing System
```
4px (xs), 8px (sm), 12px (md), 16px (lg), 20px (xl), 24px (2xl), 32px (3xl)

Component Specific:
• Section Gap: 32px
• Card Gap: 16px  
• Container Padding: 20px
• Internal Padding: 16px
```

### Corner Radius
```
• Small: 4px
• Medium: 8px
• Large: 16px
• Circle: 50% (완전한 원)
```

### Shadows
```
Card Default: X:0, Y:2, Blur:8, rgba(0,0,0,0.08)
Card Hover: X:0, Y:4, Blur:16, rgba(0,0,0,0.12)
Button: X:0, Y:1, Blur:4, rgba(0,0,0,0.1)
```

## 📱 Screen Layout (393×852px)

### Overall Structure
```
Status Bar: 393×44px (Fixed Top)
Header: 393×64px (Fixed Top)
Content Area: 393×664px (Scrollable)
Tab Bar + Home Indicator: 393×100px (Fixed Bottom)
```

### Component Dimensions

#### 1. Status Bar (393×44px)
```
Height: 44px
Padding: 16px horizontal, 8px vertical
Time Font: 17px, Weight 500, Color #171719
Icons: 16×16px, Color #202C6C
```

#### 2. Header (393×64px)  
```
Height: 64px
Padding: 20px horizontal, 16px vertical
Logo: 24px font, Weight 700, Brand gradient
Icons: 24×24px, Color #202C6C
Icon Container: 48×48px, Radius 24px
```

#### 3. Category List (393×88px)
```
Height: 88px
Padding: 16px all sides
Category Item: 64×64px, Radius 32px (완전한 원)
Gap: 12px between items
Emoji: 18px
Text: 10px, Weight 500
```

#### 4. Content Card (192×176px)
```
Size: 192×176px
Radius: 8px
Action Buttons: 24×24px, Radius 12px
Button Gap: 4px
Text Padding: 16px
Title: 14px, Weight 500
Subtitle: 12px, Weight 400
```

#### 5. User Item (393×80px)
```
Height: 80px
Padding: 16px
Avatar: 48×48px, Radius 24px (완전한 원)
Name: 14px, Weight 500, Color #202C6C
Content: 12px, Weight 400, Color #666
Follow Button: Height 32px, Radius 16px
Action Icons: 16×16px
```

#### 6. Ranking Item (80×120px)
```
Container: 80×120px  
Image: 64×80px, Radius 8px
Medal: 18×18px, Position top-right (-4px, -4px)
Title: 12px, Weight 700, Color #202C6C
Author: 10px, Weight 400, Color #666
Stats: 8px, Weight 400, Color #999
```

#### 7. Ad Banner (393×96px)
```
Height: 96px
Padding: 16px
Radius: 8px
Icon Area: 64×64px, Radius 16px
Title: 14px, Weight 700, Color #202C6C
Description: 14px, Weight 400, Color #666
AD Badge: Bottom-right, 12px font, Radius 12px
```

#### 8. Tab Bar (393×80px)
```
Height: 80px
Padding: 24px horizontal, 12px vertical
Icons: 24×24px
Text: 12px, Weight 500
Badge: 16×16px, Radius 8px
Active Indicator: 4×4px, Radius 2px
```

#### 9. Home Indicator (393×20px)
```
Height: 20px
Indicator: 144×4px, Radius 2px, Color #D1D5DB
```

## 🔧 Component States

### Category Item
```
Default: BG #F7F7F8, Border #E0E6ED, Text #202C6C
Active: BG Brand Gradient, Text #FFFFFF, Shadow
Hover: BG #E8F0FE, Scale 1.05
```

### Content Card  
```
Default: Shadow default
Hover: Shadow hover, Scale 1.02
Action Buttons:
  - Default: BG rgba(255,255,255,0.2)
  - Active: BG solid color + shadow
```

### Tab Item
```
Default: Icon/Text #999999
Active: Icon/Text #202C6C, BG gradient/10, Scale 1.05
Badge: BG #FF6B6B to #FF5252 gradient
```

### Follow Button
```
Default: BG Brand gradient, Text #FFFFFF
Following: BG #E0E6ED, Text #666666
```

## 📐 Auto Layout Settings

### Main Container
```
Direction: Vertical
Gap: 0px
Padding: 0px
Fill: Container
```

### Content Area  
```
Direction: Vertical
Gap: 32px
Padding: 0px 20px 112px 20px
Fill: Container
```

### Category List
```
Direction: Horizontal  
Gap: 12px
Padding: 16px
Hug: Contents
```

### Content Cards
```
Direction: Horizontal
Gap: 16px  
Padding: 0px
Hug: Contents
```

### User Items
```
Direction: Vertical
Gap: 0px
Padding: 0px
Fill: Container
Divider: 1px #F0F0F0
```

### Ranking Grid
```
Direction: Horizontal
Gap: 16px
Padding: 16px
Hug: Contents
Wrap: Yes
```

## 🎭 Interactive Prototyping

### Transitions
```
Tab Switch: Smart Animate, 300ms ease-out
Category Select: Instant
Card Hover: Scale to 1.02, 200ms ease-out  
Button Tap: Scale to 0.95, 100ms ease-in-out
```

### Overlays
```
Like Animation: Heart scale 1.2 → 1.0, 200ms
Follow Success: Button bg change, 300ms
Bookmark Save: Icon fill + scale, 200ms
```

## 📎 Asset Requirements

### Images
```
Content Images: 192×176px, JPG/PNG
User Avatars: 48×48px minimum, JPG/PNG  
Ranking Images: 64×80px, JPG/PNG
Ad Banner Icon: 64×64px, PNG with transparency
```

### Icons
```
System Icons: 24×24px, Lucide style
Small Icons: 16×16px
Button Icons: 20×20px
All icons: Outline style, 2px stroke
```

### Gradients
```
Brand: Linear, 45°, #56E1E9 → #7597DF → #9596F4
Error: Linear, 90°, #FF6B6B → #FF5252
Badge: Linear, 45°, #56E1E9 → #7597DF
```

## 🚀 Figma File Structure
```
📁 Design System
  🎨 Colors
  📝 Typography  
  📐 Spacing
  🔄 Effects

📁 Components
  📱 Status Bar
  🎯 Header
  🏷️ Category Item
  🖼️ Content Card
  👤 User Item  
  🏆 Ranking Item
  📢 Ad Banner
  🔖 Tab Bar

📁 Screens  
  📱 Home Screen (393×852px)
  📱 Tab Variations
  📱 State Variations