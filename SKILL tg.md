## 
name: tg-brand-design
description: Create premium dark-theme interfaces in the signature
style of Tanya Gaiduk / Art Studio "Tonkaya Gran". Use this skill
when building any pages, components, or interfaces for the TG brand.
Generates production-grade code with strict brand compliance: deep
navy backgrounds, gold accents, glassmorphism cards, magenta glows,
and cinematic atmosphere.
license: Complete terms in LICENSE.txt

This skill guides creation of premium dark-theme interfaces in the
signature style of Tanya Gaiduk / Art Studio "Tonkaya Gran" / The
Art of Technology. Every generated interface must feel like digital
jewelry: expensive, atmospheric, technological, and full of
character. Implement real working code with obsessive attention to
brand aesthetics, animations, and detail.

The user provides frontend requirements: a component, page, landing,
portfolio, or interface to build. They may include context about the
purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to an aesthetic
direction within the TG brand framework:

- **Purpose**: What problem does this interface solve? Who is it for?
(expert, creator, business, AI project, personal brand)
- **Tone**: The TG brand operates on a spectrum from cinematic luxury
to technological futurism. Pick a point on this scale: Luxury
Cinematic (maximum gold, depth, glows, feeling of a jewel-crafted
digital product), Tech Futuristic (more blue and magenta, particles,
neon lines, feeling of an AI laboratory), Editorial Refined
(restrained, typographically flawless, lots of air, gold as accent
only), Creative Expressive (bold compositions, asymmetry, overlaps,
feeling of digital art), or a mix � as long as it stays within the
TG brand and reads as part of the ecosystem.
- **Constraints**: Technical requirements (framework, performance,
accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? A gold shimmer
on the headline? Floating particles? Cinematic parallax? Define it
and execute flawlessly.

**CRITICAL**: Every TG brand interface must feel like part of a
unified universe while being unique in its details. Never make two
identical projects. Vary composition, accents, animations � but
always stay within the brand system. The key is intentionality
within constraints.

Then implement working code (React + Tailwind + Framer Motion
preferred, or HTML/CSS/JS, Vue, etc.) that is:

- Production-grade and functional without modifications
- Visually stunning and impossible to forget
- Cohesive with the TG brand aesthetic point-of-view
- Meticulously refined in every detail: shadows, glows, transitions,
spacing, rhythm

## Brand Color System (MANDATORY)

Use these CSS variables in every project. Never invent a new palette
� work strictly within the brand:

:root {
  /* BACKGROUNDS */
  --tg-deep-navy: #0A0E27;
  --tg-dark-base: #070B1E;
  --tg-royal-blue: #1A3A8F;
  --tg-purple-mid: #1A1040;
  --tg-dark-blue: #0D1B3E;

  /* GOLD (primary accent) */
  --tg-gold: #D4A843;
  --tg-gold-light: #F5D77A;
  --tg-gold-gradient: linear-gradient(135deg, #D4A843, #F5D77A,
  #D4A843);

  /* MAGENTA (secondary accent) */
  --tg-magenta: #E91E90;
  --tg-magenta-deep: #9B1B7A;

  /* SUPPLEMENTARY */
  --tg-electric-blue: #2E5BFF;
  --tg-vivid-purple: #6A0DAD;
  --tg-orange-glow: #FF6B2B;

  /* TEXT */
  --tg-white: #FFFFFF;
  --tg-soft-white: #E0E0E0;
  --tg-muted: #9CA3AF;

  /* BACKGROUND GRADIENTS */
  --tg-bg-main: linear-gradient(135deg, #0A0E27 0%, #1A1040 30%,
  #0D1B3E 60%, #0A0E27 100%);
  --tg-bg-section: linear-gradient(180deg, #1A1040 0%, #0A0E27
  100%);
  --tg-glow-magenta: radial-gradient(ellipse at center,
  rgba(233,30,144,0.15) 0%, rgba(42,91,255,0.1) 50%, transparent
  70%);
  --tg-glow-blue: radial-gradient(ellipse at 70% 50%,
  rgba(46,91,255,0.12) 0%, transparent 60%);
  --tg-glow-gold: radial-gradient(ellipse at center,
  rgba(212,168,67,0.08) 0%, transparent 50%);

  /* CARDS */
  --tg-card-bg: rgba(255,255,255,0.03);
  --tg-card-border: rgba(212,168,67,0.2);
  --tg-card-border-hover: rgba(212,168,67,0.6);
  --tg-card-glow: 0 0 30px rgba(212,168,67,0.1);
  --tg-card-radius: 16px;
  --tg-card-blur: blur(10px);

  /* BUTTONS */
  --tg-btn-primary-bg: linear-gradient(135deg, #D4A843, #F5D77A,
  #D4A843);
  --tg-btn-primary-text: #0A0E27;
  --tg-btn-primary-glow: 0 0 20px rgba(212,168,67,0.5);
  --tg-btn-secondary-border: 1.5px solid #D4A843;
  --tg-btn-accent-bg: linear-gradient(135deg, #E91E90, #9B1B7A);
  --tg-btn-accent-glow: 0 0 25px rgba(233,30,144,0.4);
  --tg-btn-radius: 8px;

  /* HEADER */
  --tg-header-bg: rgba(10,14,39,0.85);
  --tg-header-blur: blur(20px);
}

## Brand Typography (MANDATORY)

H1 (Hero): Playfair Display, Bold, 56-72px, gold gradient with
-webkit-background-clip: text
H2 (Sections): Playfair Display, Bold, 36-48px, var(--tg-gold)
H3 (Cards): Cormorant Garamond or Montserrat, SemiBold, 20-24px,
var(--tg-white)
Body: Montserrat, Regular/Light, 16-18px, var(--tg-soft-white)
Captions: Montserrat, Light, 14px, var(--tg-muted)
Uppercase labels: Montserrat, Bold, letter-spacing: 3-4px, 12-14px,
var(--tg-gold) or var(--tg-magenta)
Brand cursive: Great Vibes, Regular, 24-36px, var(--tg-gold)
Buttons: Montserrat, SemiBold, 16px

Google Fonts import:
@import url('[https://fonts.googleapis.com/css2?family=Playfair+](https://fonts.googleapis.com/css2?family=Playfair+)
Display:wght@400;700;900&family=Cormorant+Garamond:wght@400;500;
600;700&family=Montserrat:wght@300;400;500;600;700&family=Great+
Vibes&display=swap');

NEVER use: Inter, Roboto, Arial, system-ui, Space Grotesk, Open
Sans � these destroy the premium character of the TG brand.

## Frontend Aesthetics Guidelines

Focus on:

- **Typography**: Always use the brand font stack above. Pair
Playfair Display as the display font with Montserrat as the body
font. Great Vibes for cursive accents on slogans and signatures.
Every heading must feel like it belongs in a luxury editorial, not
a SaaS dashboard.
- **Color & Theme**: ALWAYS dark theme. Deep navy backgrounds with
layered radial-gradient glows (magenta, blue, gold) creating depth
and atmosphere. Gold as the dominant accent � sharp, confident,
luxurious. Magenta as the secondary accent for highlights and
emphasis. Use CSS variables from the brand system for absolute
consistency. A dominant gold with sharp magenta accents always
outperforms timid, evenly-distributed palettes.
- **Motion**: Use animations that feel cinematic, not playful. Gold
shimmer effect on H1 headlines (slow gradient animation, 3-4s).
Scroll-triggered fade-in + slide-up for all sections with staggered
delays on card grids (+100-150ms per item). Hover states: cards
scale(1.02) with enhanced border glow; buttons translateY(-2px)
with box-shadow glow. Background glow pulsation (8-12s, infinite,
subtle scale). Gold particle float animations in hero sections
(15-30 particles with varied delays). Prioritize CSS-only for HTML;
use Framer Motion for React.
- **Spatial Composition**: Generous negative space creates the
feeling of luxury � section padding 80-120px vertical on desktop.
Max content width 1200px, centered. Card grids: 3 columns desktop,
2 tablet, 1 mobile with 24-32px gaps. Alternate between dense
sections (card grids, projects) and airy sections (quotes, CTA) to
create breathing rhythm across the page. Asymmetric glow placement
� never center everything.
- **Backgrounds & Visual Details**: Never use solid color
backgrounds. Every section needs the dark gradient base plus at
least one decorative radial-gradient glow (magenta for emotional
sections like CTA and quotes, blue for informational sections like
about and process, gold for accent moments like hero and projects).
Vary glow positions asymmetrically across sections. Add gold
particles in hero via CSS or canvas. Use glassmorphism
(backdrop-filter: blur + semi-transparent bg + gold border) on all
cards. Section dividers: thin gold gradient lines with a star
character centered.

NEVER use generic AI-generated aesthetics like overused font
families (Inter, Roboto, Arial, system fonts), cliched color
schemes (particularly purple gradients on white backgrounds),
predictable layouts and component patterns, and cookie-cutter
design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely
designed for the context within the TG brand universe. No two
projects should look identical. Vary composition, glow placement,
animation patterns, and spatial rhythm � but always stay within
the brand system.

## Brand Component Patterns (MANDATORY)

Glassmorphism Cards:
background: var(--tg-card-bg);
border: 1px solid var(--tg-card-border);
border-radius: var(--tg-card-radius);
backdrop-filter: var(--tg-card-blur);
-webkit-backdrop-filter: var(--tg-card-blur);
padding: 32px;
transition: all 0.3s ease;
On hover: border-color var(--tg-card-border-hover), box-shadow
var(--tg-card-glow), transform scale(1.02).

Primary Button (Gold):
background: var(--tg-btn-primary-bg);
color: var(--tg-btn-primary-text);
border: none;
border-radius: var(--tg-btn-radius);
padding: 16px 32px;
font-family: Montserrat, sans-serif;
font-weight: 600;
On hover: box-shadow var(--tg-btn-primary-glow), transform
translateY(-2px).

Secondary Button (Gold outline):
background: transparent;
color: var(--tg-gold);
border: var(--tg-btn-secondary-border);
border-radius: var(--tg-btn-radius);
padding: 16px 32px;
On hover: background fills with gold gradient, text turns dark,
box-shadow glow appears.

Accent Button (Magenta):
background: var(--tg-btn-accent-bg);
color: var(--tg-white);
border: none;
border-radius: var(--tg-btn-radius);
padding: 16px 32px;
On hover: box-shadow var(--tg-btn-accent-glow), transform
translateY(-2px).

Gold Shimmer Text:
background: var(--tg-gold-gradient);
background-size: 200% auto;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
animation: tg-shimmer 3s ease-in-out infinite;
Keyframes: 0%,100% background-position 0% center; 50%
background-position 200% center.

Section Divider:
Flex container with centered star character between two gradient
lines. Lines: flex 1, max-width 200px, height 1px, background
linear-gradient(90deg, transparent, var(--tg-gold), transparent).
Star: color var(--tg-gold), font-size 14px. Padding 40px 0.

Badges (tech stack, tags):
display: inline-block;
background: var(--tg-card-bg);
border: 1px solid var(--tg-card-border);
border-radius: 24px;
padding: 8px 20px;
font-family: Montserrat;
font-size: 14px;
color: var(--tg-soft-white);
backdrop-filter: var(--tg-card-blur);
On hover: border-color var(--tg-card-border-hover), color
var(--tg-gold).

Sticky Header:
position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
background: var(--tg-header-bg);
backdrop-filter: var(--tg-header-blur);
border-bottom: 1px solid rgba(212,168,67,0.1);
padding: 16px 40px;
Flex, space-between, align-items center.

Gold Particles (Hero):
Absolute positioned elements, 3px width/height, background
var(--tg-gold), border-radius 50%, opacity 0, animation
tg-particle-float 4s ease-in-out infinite. Keyframes: 0%,100%
opacity 0, translateY(0) scale(0.5); 50% opacity 0.8,
translateY(-30px) scale(1). Generate 15-30 particles with varied
animation-delay and positions.

## Brand Contact Information

Telegram:  t.me/artsonga
Email:     [art-eko@yandex.ru](mailto:art-eko@yandex.ru)
VK:        vk.com/id40612724
Portfolio: art-eko.wfolio.pro/me
WhatsApp:  +7 926 023 03 05

## Brand Text Elements

Logo: TG (gold serif)
Signature: Tanya Gaiduk (cursive Great Vibes, gold)
Studio: Art Studio "Tonkaya Gran"
Slogan: The Art of Technology
Motto: My principle. My rhythm. My path.
Copyright: 2025 Tanya Gaiduk / Art Studio "Tonkaya Gran" / The Art
of Technology

## Absolute Rules

NEVER use:

- Light or white backgrounds � TG brand is ALWAYS dark (deep navy)
- Inter, Roboto, Arial, system-ui, Space Grotesk, Open Sans fonts
- Standard purple gradients on white
- Template layouts without character
- Colors outside the brand palette
- Cards without glassmorphism effect
- Sections without at least one background glow
- Buttons without hover effects
- H1/H2 headings that are not gold
- Flat design without depth � always create layers and atmosphere
- Identical glows on every section � vary color and position
- Generic AI aesthetics � every project must feel handcrafted

ALWAYS use:

- Dark background var(--tg-deep-navy) or var(--tg-dark-base)
- Gold headings with shimmer (H1) or static gold (H2)
- Glassmorphism cards with gold borders
- Background glows (magenta / blue / gold) � minimum one per section
- Scroll-triggered reveal animations
- Hover effects on all interactive elements
- Gold dividers with star symbol between sections
- Brand fonts: Playfair Display + Montserrat + Great Vibes
- CSS variables from the brand system
- Responsive design (desktop / tablet / mobile)
- The feeling of premium, depth, and technology
- The motto "My principle. My rhythm. My path." in footer or CTA

## Pre-Delivery Checklist

Before delivering code, verify:

- All CSS variables from brand system are connected
- Google Fonts loaded (Playfair, Montserrat, Great Vibes, optionally
Cormorant)
- Background is dark gradient, not flat color
- Minimum 1 background glow per section
- Headings are gold (H1 with shimmer, H2 static gold)
- Cards use glassmorphism + gold border + hover
- Buttons have hover glow and transition
- Scroll animations connected
- Star dividers between sections
- Responsive design verified (mobile not broken)
- No generic fonts, no light backgrounds, no template aesthetics
- There is a feeling of premium, depth, and character
- The project looks like something you want to share

**IMPORTANT**: Match implementation complexity to the aesthetic
vision. The TG brand demands cinematic depth � elaborate layered
backgrounds, multiple glow sources, particle effects, and shimmer
animations. But restraint matters too: better 3 perfect animations
than 15 chaotic ones. Elegance comes from executing the vision with
precision.

Remember: The Tanya Gaiduk / "Tonkaya Gran" brand is not just a
dark theme with gold. It is a cinematic feeling of digital art.
Every pixel must serve that impression. Don't hold back � show what
is possible when technology meets genuine taste and vision.

The Art of Technology. My principle. My rhythm. My path. a distinctive vision.
                    ]  �  �  '	  k	  �	  �	  �	  �	  �	   
  6
  z
  �
  �
  #  $  i  �  �  �  �  �  1  Z  �  �  
    
  �
  �
  �
    b  �  �    Y  i  �  �  �  	  
  J  �  �       !  *  �  �  �  (  m  }  ~  �  �  �    	    %  @  [  w  �  �  �  �  �  �  �  ?  K  L  o  �  �  �  �  �  �      %  <  X  o  p  ����������������������������������������������������������������������������������������������     hQ)' hQ)' OJ QJ ^J mH	sH	^       ]  �  �  '	  k	  �	  �	  �	  �	  �	  6
  z
  �
  �
  #  $  i  �  �  �  �  �  1  Z  �  �  
  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  
  *  
*  �
  �
    b  �  �    Y  i  �  �  	  
  J  �  �       !  _  �  �  �  (  m  }  ~~  �  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  �  �  �    	    %  @  [  w  �  �  �  �  �  �  ?  K  L  o  �  �  �  �  �  �      %  <  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  <  X  o  p  �  �  �  +  4  l  �  �  �    M  {  |  �  �  �    =  W  u  v  �  �  �  �  -  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  p  �  �  �  +  4  l  o  �  �  �    M  {  |  �  �  �    =  W  u  v  �  �  �  �  -  _  �  �  �  �  �  &  =  F  H  I  i  j  �  �    G  W  �  �  
  1  n  �  �  �  �  )  j  �  �  �  �  �  �     !  +  i  �  �  .  @  �  �  �     D   �   �   �   6!  v!  �!  �!  :"  |"  �"  �"  #  [#  v#  �#  �#  $  a$  �$  ����������������������������������������������������������������������������������������������     hQ)' hQ)' OJ QJ ^J mH	sH	^-  _  �  �  �  �  �  &  F  H  I  i  j  �  �    G  W  �  �  
  1  n  �  �  �  �  )  j  �  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  �  �  �  �  �     !  +  i  �  �  .  @  �  �     D   �   �   �   6!  v!  �!  �!  :"  |"  �"  �"  #  [#  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  [#  �#  �#  $  a$  �$  �$  �$  9%  z%  �%  &  >&  u&  �&  �&  
'  '  H'  �'  �'  (  /(  0(  u(  �(  �(  5)  G)  H)  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  �$  �$  �$  9%  v%  z%  �%  &  >&  u&  �&  �&  
'  '  H'  v'  �'  �'  (  /(  0(  u(  �(  �(  5)  G)  H)  p)  q)  �)  �)  �)  �)    0  H  W  r*  �  �  �  �  +  >+  L+  q+  �+  �+  �+  �+  	,  
,  +,  D,  [,  �,  �,  �,  �,  -  -  /-  T-  l-  z-  �-  �-  �-  �-  �-   .  .  8.  T.  s.  �.  �.  �.  /   /  1/  r/  �/  �/  .0  /0  J0  a0  �0  �0  �0  �0  �0  �0  1  ����������������������������������������������������������������������������������������������     hQ)' hQ)' OJ QJ ^J mH	sH	^H)  p)  q)  �)  �)  �)  �)    H  W  r  �*  �*  �*  �*  +  >+  L+  q+  �+  �+  �+  �+  	,  
,  +,  D,  [,  �,  �,  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  �,  �,  �,  -  -  /-  T-  l-  z-  �-  �-  �-  �-   .  .  8.  T.  s.  �.  �.  �.  /   /  1/  r/  �/  �/  .0  /0  J0  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  J0  a0  �0  �0  �0  �0  �0  �0  1  >1  x1  �1  �1  �1  �1  �1  2  K2  _2  �2  �2  �2  �2  3  Q3  �3  �3  �3  �3  4  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  1  >1  r1  x1  �1  �1  �1  �1  �1  2  K2  _2  �2  �2  �2  �2  3  Q3  �3  �3  �3  �3  4  4  4  <4  Y4  z4  �4  �4  �4  �4  �4  �4  5  5  95  b5  �5  �5  �5  �5  �5  �5  6  W6  |6  �6  �6  �6  7  97  \7  �7  �7  �7  8  8  &8  c8  �8  �8  9  +9  W9  �9  �9  �9  �9  :  J:  �:  �:  �:  �:  �:  �:  @;  K;  y;  �;  �;  <  0<  N<  o<  �<  �<  �<  =  L=  M=  �=  �=  >  ����������������������������������������������������������������������������������������������     hQ)' hQ)' OJ QJ ^J mH	sH	^4  4  4  <4  Y4  z4  �4  �4  �4  �4  �4  �4  5  95  b5  �5  �5  �5  �5  �5  �5  6  W6  |6  �6  �6  �6  7  97  \7  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  \7  �7  �7  8  8  &8  c8  �8  �8  9  +9  W9  �9  �9  �9  :  J:  �:  �:  �:  �:  �:  �:  @;  K;  y;  �;  �;  <  0<  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                 gdQ)'  0<  N<  o<  �<  �<  =  L=  M=  �=  �=  >  S>  �>  �>  �>  �>  #?  g?  �?  �?  �?  �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �            �                                                                                                                                                                          gdQ)'  >  S>  �>  �>  �>  �>  �>  #?  g?  �?  �?  �?  �?  �?  �?  ��������������                                                                                                                                                                                                                                                                                                                                                       hQ)' h@~~� OJ QJ ^J mH	sH	 hQ)' OJ QJ ^J mH	sH	  hQ)' hQ)' OJ QJ ^J mH	sH	2 1�h:p>\L ��. ��A!�6"�7#�n$�n%�  ������                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               x           �   �   �   �   �   �   �   �   �   6  6  6  6  6  6  6  6  6  v  v  v  v  v  v  v  v  v  6  6  6  6  6  6  >  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  �   6  6     6  6  6  6  6  6  6  6  �   6  6  6  6  6  6  6  6  6  6  6  6  h  H  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  6  p  6  2     �  �  �  �      &  6  F  V  f  v  �  �  �  �  �  �      2  (  �  �  &  6  F  V  f  v  �  �  �  �  �  �      &  6  F  V  f  v  �  �  �  �  �  �      &  6  F  V  f  v  �  �  �  �  �  �      &  6  F  V  f  v  �  �  �  �  �  �      &  6  F  V  f  v  �  �  �  �  �  �      &  6  F  V  f  v  �  �  8  X  �      V  ~  �  �  �  �  �  �  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  �  �          0  @  6  6  6  6  6      OJ PJ QJ _HmHnHsHtH    P  `�� P          1KG=K9     d ��  CJ KH _HaJ mHsHtH	                  B A ��� B          A=>2=>9  H@8DB  0170F0    X i ��� X        0 1KG=0O  B01;8F0   �  4�  l 4�   a�      . k ��� .         0  5B  A?8A:0        @ Z@ � @  >\L 0 "5:AB    d�  �   CJ OJ QJ aJ < �/��<   >\L 0  "5:AB  =0:   CJ OJ QJ aJ PK     ! ����        [Content_Types].xml���N�0E�H���-J��@%�ǎǢ|�ș$�ز�U��L�TB� l,�3��;�r��Ø��J��B+$�G]��7O٭V��<a������(7��I��R�{�pgL�=��r����8�5v&����uQ�뉑8��C����X=����$␴�?6N�JC�������F�B.ʹ'�.�+���Y�T���^e5�5�� ��ð�_�g -�;�����Yl�ݎ��|6^�N��`�?���[  �� PK     ! �֧��   6     _rels/.rels���j�0���}Q��%v/��C/�} �(h"���O�
������=������ ����C?�h�v=��Ʌ��%[xp��{۵*�Pѣ<�1�H�0���O�R�Bd���JE�4b$��q_����6L��R�7`�������0̞O��,�En7�Li�b��/�S���e��е����  �� PK     ! ky��   �      theme/theme/themeManager.xml�M � @�}�w��7c�(Eb�ˮ�� C�AǠҟ����7��՛K Y,� �e�.���|,���H�,l����xɴ��I�sQ}#Ր���� ֵ+�!�,�^�$j=�GW���)�E�+& 8�  �� PK     ! v\+��  �     theme/theme/theme1.xml�Y�n7��;,��X�m��˒�&�C��ȑ��]F�傤��8�^ZH�^ ���P5� �}�$hӇ�+�H��`�Aa�`-����������[�#�b.��~�F��p�a]U�~k룲�	��.�,�U��k��n�5�{ �5T�C)���%сe$n���[��I���R��#�ѥB.W\��}/F�}?�u�������H��� ��R���M�O��{u<:�=��z�_��ϵl��Wb(6)����u���c�{		?T�����o.����d �-�7�t��'�٦�F�����k ��FY}2}�:8y��ԙ_-�ʅ1� �_�+����7�/�q�W���_�R�+s��V�Q_����W���B��l�5(���+��R�a�5(�$�ϣ��r�8Fg���Nx�X̕�c�ѐE�ڢ�by�؋�#Ʒ@@	R$I��a�{����H&�:	EC�KP�,� �<��J��}��F���	��ܒ��'���w@�o@^�xqz�����ӧOO��vH�T�%�����{���|�����o�>�ҍ&��O�����w��[oj��_��y~�������C�Gm�"�>���Ma��m~1�V��)��H���ߐ���"������C�qoY��!H��x7�,�.c�Ƹ� w�^��[�8po�&�B���7Qly�1H ���[4(�% p���~c}��{H�e�]��L�������$-Ҷ�i*�M"���E�m�f��Wc�u�:>��po � ���2�m4�(r�l����A2t�ly��5�O�2���B�d�9��p�]����]:�l$���ҹ�3�u��Q���M�&�cчE��.�.��u ~@�Bw? �r����>d9��4@�/���m̬�miaW�����b78qFGmX���1EG���w�c�K,�OI�	!�lcW`�Av�����fg>O�a�ll���L��8B|��=�i�F����8�>��M��6��i�}:��^�� DVS���Cn��<�ܗ�,�/A*X�)�N۴�6�LoǕnA�r�TDW-6p���v�薬�'"����8�jz�b+a]��Y�P�gz�E���f��.y��:�j�|ֺ�k�����,�����E=�u7�C�q�͌,W��L�mԐ!��QPt�IP�PڔC�w�	x��n��ң�8�&!|Ue6�pGZ��L~~Bd�Q����b�:^����S���A�˺�@TO�ri�HN�s�0�J�ax%St�4^T���j���N(ً�06�I,;H�&�g�P���aQq�(+�W͙�e^��pݫ��"�uс������z�]�̫��"cZ ���$0��<]Q\O�.
�sx�"�����MB[F7|"�G�qt���и��+S�Z��)�~~�S��X\�� 7�hlf
{GU���
!�AI��� �F	ĎP�a��¦#yz�*&�$\�:ajp�tR�DDb�QU}u��
4�9Ds� !���*�V�7r�t�ɸ��i��XQ�N/!ç�����<XI���v��6�{Bl��W���5�^�e�l3�i���7V:��uD��+���S��'}�����j�d\ہ*��Q�j�����ª{�����4�5��*�j����ä���rE�`511�4�§�{6�V&�n�OȪ<���J�Am��EM1�O�*g�W��19���S$��_����[V#����*?��F-,�&}���~�n�g�G�<����ڕ�j�#�ʚ�'�҆]�  �� PK     !  ѐ��     '   theme/theme/_rels/themeManager.xml.rels��M �0���wooӺ�&݈Э���5 6?$Q�� �,.�a��i����c2�1h�:�q��m��@RN��;d�`��o7�g�K(M&$R(.1�r'J��ЊT���8��V�"��AȻ�H�u}��|�$�b{� �P����8�g/]�QAsم(����#��L�[����   �� PK-      ! ����                      [Content_Types].xmlPK-      ! �֧��   6               0  _rels/.relsPK-      ! ky��   �                  theme/theme/themeManager.xmlPK-      ! v��  �               �  theme/theme/theme1.xmlPK-      ! 
ѐ��     '             
  theme/theme/_rels/themeManager.xml.relsPK      ]      **
<a:clrMap xmlns:a="[http://schemas.openxmlformats.org/drawingml/2006/main](http://schemas.openxmlformats.org/drawingml/2006/main)" bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>    �7  |  d    ����   p  �$  1  >  �?      %   )   -   1      
  �  <  -  �  [#  H)  �,  J0  4  \7  0<  �?  !   "   #   $   &   '   (   *   +   ,   .   /   0     �8     �                    @ �   ��    � ��� �    �    �         �0    �(    	�                    
�          �B    
�        S �   �   �    �   	   ?    �          
      l   r   �   �   G  T  
    "  )  )  +  D  F  _  a  {  }  �  �  �  �  �  �      s  u  �  �  �  �  �  �  �   
  )
  +
  @
  B
    
  ^
  �
  �
  �
  �
  �
  �
  �
  �
  8  :  n  r  �  �  �  �  �  �      O  S  �  �  �  �  �  �  �  �  �  �  �  �  �  �      '  +  A  C  [  ]  �  �  �  �  �  �  �  �  �  �  �  �  �  �      1  3  4  7  c  e  f  i  q  s  �  �  �  �  �  �  �  �  �  �      
        *  ,  �  �  �  �  4  <  M  O  �  �  �  �      %  '  e  g  �  �  �  �  j  w  �  �  )  3  g  t  �  �  q!  ~~!  �!  �!  �!  �!  �!  �!  �!  �!  "  
"  "  !"  9"  ;"  �"  �"  �"  �"  #  	#  
#  
#  #  #  (#  *#  +#  .#  a#  c#  d#  g#  �#  �#  �#  �#  �#  $  Q$  S$  i$  k$  l$  o$  �$  �$  �$  �$  A%  C%  D%  G%  O%  Q%  a%  c%  �%  �%  �%  �%  �%  �%  �%  �%  �%  �%  %&  '&  U&  [&  t&  z&  �&  �&  �'  �'  (  (  s(  u(  {(  }(  �(  �(  )  
)  /)  1)  [)  ])  ~~)  �)  �)  �)  �)  �)  *  
*  5*  9*  �*  �*  +  +    f+  �+  �+  ,  ,  �,  �,  
-  -  x-  ~-  �-  �-  4.  6.  �.  �.  >0  @0  U0  W0  �0  �0  �3  �3  �6  �6  �6  �6  �7                                                                                                                                                                                                                                                                                                                   �  �     *  	      %  �
  �
      P  Y  n  s  �  �  �  �  1  :  O  T  �  �  �  �  �  �  '  ,  �  �      |  �  �  �      �  �  G  K  �  �  �  �  
    *  c  �  �  �  �  8  G  �     �!  �!  �!  �!  �!  �!  "  	"  3"  7"  �"  �"  �"  �"  #  #  "#  &#  [#  *#  �#  �#  K$  O$  c$  g$  �$  �$  ;%  ?%  [%  _%  �%  �%  �%  �%  &  #&  i'  q'  �'  �'  �'  (  m(  q(  �(  �(  )  )  ))  -)  U)  Y)  x)  |)  �)  �)  *  	*  5*  :*  �*  �*    g+  �+  �+  80  <0  �7  �7  �7   3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3  3        �7   	         �          u? Q)' 
 � B >\L RV` @~� 1� rz�     �7  �7         �@� �7  �7        �7      �7             �7  �  @  ��    U n k n o w n ��            ��     ��   ��    ��   ��       G�� �. �[x �	       �      T i m e s   N e w   R o m a n   5�                   �    S y m b o l   3.�� �. �[x �	       �      A r i a l   ?=�� 	�. �Cx �	       �      C o u r i e r   N e w   3.�            �             �      A p t o s   9=�� 	� ���         �      C o n s o l a s   C.�            �             �      A p t o s   D i s p l a y   A�� � ��$ B       �      C a m b r i a   M a t h   "  q� ��  h    ����        Y  �/       �e   Y  �/      e       ! �                                                                                                                                                                                                                                                                                                                        6n� � ��20              �7  �7                                                                       K� �  ��                        @P    	�� 	$P      ���������������������rz�    2                     !                             x   x           �  �	       �      ��                B0BLO=0  3094C: B0BLO=0  3094C:                                                                                                                                                                                                                                            ��                        �����Oh�� +'��0   �@        �      �      �      �      �      �      �      �   	               @     L      X     d     l     t     |     �     �                            ������� ������                            Normal.dotm       ������� ������        2         Microsoft Office Word   @    F�#    @    �+Ŀ��@    �+Ŀ��         Y     �/         G   p?  ����    	RtO 	  �   q                   d   .    �       �   �"System                             -     �      �   �"System B�  �~��  �f��C          -    �     �       �   �"System                             -     -    �     �       �   �"System                             -     -    �     � �      �   �	@ 0Courier New                        -     ���      �   �@ 1Courier New                        -    -    -    -     -    -    -    -     -    -    -        	      2 W Y       c---   	    	       2 W r       c      	      -     -    -    -    -     -    -    -    -     -    -    -        	      2 g Y       cname: tg  	   	  	    	       2 g �       c-     	      2 g �       cbrand  	  	     	       2 g �       c-     	      2 g �       cdesign	  	  	 	    	       2 g        c      	      -     -    -    -    -     -    -    -        	   ;   2 w Y        cdescription: Create premium dark  	   	  	   	  	   	  	  	   	  	   	  	      	       2 w e      c- 	    	   =   2 w n!      ctheme interfaces in the signature  	   	  	   	  	   	  	   	  	  	   	  	   	 	    	       2 w �      c      	      -     -    -    -        	   m   2 � Y A      cstyle of Tanya Gaiduk / Art Studio "Tonkaya Gran". Use this skill   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	    	       2 � {      c      	      -     -    -    -        	   q   2 � Y D      cwhen building any pages, components, or interfaces for the TG brand.  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	 	    	       2 � �      c      	          	   )   2 � Y       cGenerates production  	   	  	   	  	   	  	  	    	       2 �       c-     	   O   2 � 	-      cgrade code with strict brand compliance: deep  	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	 	    	       2 � �      c      	      -     -    -    -        	   p   2 � Y C      cnavy backgrounds, gold accents, glassmorphism cards, magenta glows,   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	    	       2 � �      c      	          	   1   2 � Y       cand cinematic atmosphere.   	   	  	   	  	   	  	  	   	  	    	       2 � +      c      	      -     -    -    -        	   D   2 � Y &      clicense: Complete terms in LICENSE.txt  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	    	       2 � �      c      	          	      2 � Y       c---   	    	       2 � r       c      	          	       2 � Y       c      	          	   J   2 Y *      cThis skill guides creation of premium dark  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	      	       2 �      c- 	    	   .   2 �      ctheme interfaces in the  	   	  	   	  	  	   	  	   	 	    	       2 �      c      	          	   m   2 Y A      csignature style of Tanya Gaiduk / Art Studio "Tonkaya Gran" / The   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	    	       2 {      c      	          	   p   2 &Y C      cArt of Technology. Every generated interface must feel like digital   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	    	       2 &�      c      	      -     -    -    -        	   d   2 5Y ;      cjewelry: expensive, atmospheric, technological, and full of   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	  	    	       2 5I      c      	          	   n   2 EY B      ccharacter. Implement real working code with obsessive attention to  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	 	    	       2 E�      c      	          	   I   2 UY )      cbrand aesthetics, animations, and detail.   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	 	    	       2 U�      c      	          	       2 eY       c      	      -     -    -    -        	   q   2 uY D      cThe user provides frontend requirements: a component, page, landing,  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	 	    	       2 u�      c      	          	   q   2 �Y D      cportfolio, or interface to build. They may include context about the  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	 	    	       2 ��      c      	          	   M   2 �Y ,      cpurpose, audience, or technical constraints.  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	 	    	       2 ��      c      	          	       2 �Y       c      	      -     -    -    -        	   &   2 �Y       c## Design Thinking  	   	  	   	  	   	  	    	       2 ��       c      	          	       2 �Y       c      	      -     -    -    -        	   k   2 �Y @      cBefore coding, understand the context and commit to an aesthetic  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	  	    	       2 �s      c      	          	   G   2 �Y (      cdirection within the TG brand framework:  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	    	       2 ��      c      	      -     -    -    -        	       2 �Y       c-     	       2 �a       c      	   p   2 �i C      c**Purpose**: What problem does this interface solve? Who is it for? 	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	  	    	       2 ��      c      	      -     -    -    -        	   ^   2 Y 7      c(expert, creator, business, AI project, personal brand)   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	    	       2 '      c      	          	       2 Y       c-     	       2 a       c      	   p   2 i C      c**Tone**: The TG brand operates on a spectrum from cinematic luxury 	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	  	    	       2 �      c      	          	   g   2 #Y =      cto technological futurism. Pick a point on this scale: Luxury   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	 	    	       2 #Z      c      	          	   a   2 3Y 9      cCinematic (maximum gold, depth, glows, feeling of a jewel   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	    	       2 38      c-     	      2 3@      ccrafted  	  	   	    	       2 3{      c      	      -     -    -    -        	   q   2 CY D      cdigital product), Tech Futuristic (more blue and magenta, particles,  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	 	    	       2 C�      c      	      -     -    -    -        	   d   2 SY ;      cneon lines, feeling of an AI laboratory), Editorial Refined   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	  	    	       2 SI      c      	          	   n   2 cY B      c(restrained, typographically flawless, lots of air, gold as accent  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	 	    	       2 c�      c      	          	   p   2 sY C      conly), Creative Expressive (bold compositions, asymmetry, overlaps,   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	    	       2 s�      c      	      -     -    -    -        	   >   2 �Y "      cfeeling of digital art), or a mix   	   	  	   	  	   	  	  	   	  	   	  	   	     	       2 �v      c� 	    	       2 �      c      	   8   2 ��      cas long as it stays within the 	  	   	  	   	  	   	  	  	   	  	   	 	    	       2 ��      c      	          	   M   2 �Y ,      cTG brand and reads as part of the ecosystem.  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	 	    	       2 ��      c      	          	       2 �Y       c-     	       2 �a       c      	   k   2 �i @      c**Constraints**: Technical requirements (framework, performance,	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	 	    	       2 ��      c      	          	   "   2 �Y       caccessibility).   	   	  	   	  	  	    	       2 ��       c      	      -     -    -    -        	       2 �Y       c-     	       2 �a       c      	   n   2 �i B      c**Differentiation**: What makes this UNFORGETTABLE? A gold shimmer	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	 	    	       2 ��      c      	          	   n   2 �Y B      con the headline? Floating particles? Cinematic parallax? Define it  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	 	    	       2 ��      c      	          	   .   2 �Y       cand execute flawlessly.   	   	  	   	  	   	  	  	   	    	       2 �      c      	          	       2 �Y       c      	          	   j   2 Y ?      c**CRITICAL**: Every TG brand interface must feel like part of a   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	 	    	       2 k      c      	          	   n   2 Y B      cunified universe while being unique in its details. Never make two  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	 	    	       2 �      c      	      -     -    -    -        	   b   2 !Y :      cidentical projects. Vary composition, accents, animations   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	     	       2 !@      c�     	       2 !H      c  	    	      2 !Q      cbut  	 	    	       2 !k      c      	          	   h   2 1Y >      calways stay within the brand system. The key is intentionality  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	    	       2 1b      c      	          	   (   2 AY       cwithin constraints.   	   	  	   	  	   	  	 	    	       2 A�       c      	          	       2 QY       c      	      -     -    -    -        	   g   2 aY =      cThen implement working code (React + Tailwind + Framer Motion   	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	 	    	       2 aZ      c      	      -     -    -    -        	   P   2 pY .      cpreferred, or HTML/CSS/JS, Vue, etc.) that is:  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	 	    	       2 p�      c      	          	       2 �Y       c-     	       2 �a       c      	      2 �i        cProduction	   	  	   	     	       2 ��       c- 	    	   J   2 �� *      cgrade and functional without modifications  	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	    	       2 �'      c      	          	       2 �Y       c-     	       2 �a       c      	   J   2 �i *      cVisually stunning and impossible to forget	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	 	    	       2 ��      c      	          	       2 �Y       c-     	       2 �a       c      	   J   2 �i *      cCohesive with the TG brand aesthetic point	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	     	       2 ��      c- 	    	      2 ��      cof     	       2 ��      c- 	    	      2 ��      cview 	  	    	       2 �      c      	          	       2 �Y       c-     	       2 �a       c      	   n   2 �i B      cMeticulously refined in every detail: shadows, glows, transitions,	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	 	    	       2 ��      c      	          	   "   2 �Y       cspacing, rhythm   	   	  	   	  	  	    	       2 ��       c      	          	       2 �Y       c      	      -     -    -    -        	   =   2 �Y !      c## Brand Color System (MANDATORY)   	   	  	   	  	   	  	  	   	  	   	  	   	    	       2 �n      c      	          	       2 �Y       c      	          	   q   2 �Y D      cUse these CSS variables in every project. Never invent a new palette  	   	  	   	  	   	  	  	   	  	   	  	   	  	   	  	   	  	   	  	   	  	  	   	  	   	  	 	    	       2 ��      c      	          	       2 Y       c�     	       2 a       c      	   :   2 i       cwork strictly within the brand: 	   	  	   	  	   	  	  	   	  	   	  	   	    	       2 n      c      	      �      �    "Arial                              -    -           c     c                    b    b                 a    a                                                                                                                                                                                                                                                    ��                        ��՜.�� +,��0   �         h      p      |      �      �      �      �      �      �      �       �      �      �               e            �7                                                     	   ��������                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     	                                                                           !   "   #   $   %   &   '   (   )   *   +   ,   -   .   /   0   1   2   ����4   5   6   7   8   9   :   ����<   =   >   ?   @   A   B   C   D   E   F   G   H   I   J   K   L   M   N   ����P   Q   R   S   T   U   V   W   X   Y   Z   [   \   ]   ^   _   `   a   b   c   d   e   f   g   h   i   j   k   l   m   n   o   ����q   r   s   t   u   v   w   ��������z   ������������������������R o o t   E n t r y                                              ��������   	     �      F            D�Կ��|   �       D a t a                                                         
 ������������                                    3          1 T a b l e                                                            ����                                    ;   ('      W o r d D o c u m e n t                                                ����                                        4d       S u m m a r y I n f o r m a t i o n                           ( ������������                                    O   ,A       D o c u m e n t S u m m a r y I n f o r m a t i o n           8    ��������                                    p           C o m p O b j                                                   ������������                                        r                                                                           ������������                                                   ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������� ��
  ����	     �      F    �������� Microsoft Word 97-2003 
   MSWordDoc    Word.Document.8 �9�q                                                                                                                                                                                                                                                                                                                                                                                                                          