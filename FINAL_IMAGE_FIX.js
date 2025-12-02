// Quick script to replace all problematic image paths
const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx', 
  'src/components/auth/AuthModal.tsx',
  'src/pages/Profile.tsx'
];

const replacements = [
  {
    from: 'src="/images/Favicon.png"',
    to: 'src="data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><text y=\'.9em\' font-size=\'90\'>🎮</text></svg>"'
  },
  {
    from: '"/images/profile-header.jpg"',
    to: '"https://ui-avatars.com/api/?name=User&background=667eea&color=fff&size=120"'
  },
  {
    from: '/images/profile-header.jpg',
    to: 'https://ui-avatars.com/api/?name=User&background=667eea&color=fff&size=120'
  },
  {
    from: 'avatar: "/images/profile-header.jpg"',
    to: 'avatar: "https://ui-avatars.com/api/?name=User&background=667eea&color=fff&size=120"'
  }
];

filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      replacements.forEach(replacement => {
        content = content.replaceAll(replacement.from, replacement.to);
      });
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log('🎉 All image references fixed!');