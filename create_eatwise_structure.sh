#!/bin/bash

# Create main directories
mkdir -p {src/{assets,components,screens,navigation,redux/{actions,reducers,types},services,utils,hooks},backend/{controllers,models,routes},test}

# Create main app files
touch {package.json,tsconfig.json,babel.config.js,README.md,.gitignore,.env}
touch src/App.tsx
touch src/store.ts

# Create component files
touch src/components/{Button.tsx,ReceiptCard.tsx}

# Create screen files
touch src/screens/{HomeScreen.tsx,ScanReceiptScreen.tsx,NutritionDetailsScreen.tsx}

# Create navigation files
touch src/navigation/AppNavigator.tsx

# Create redux files
touch src/redux/actions/receiptActions.ts
touch src/redux/reducers/receiptReducer.ts
touch src/redux/types/receiptTypes.ts

# Create service files
touch src/services/{nutritionService.ts,ocrService.ts}

# Create util files
touch src/utils/{formatPrice.ts,parseReceipt.ts}

# Create hook files
touch src/hooks/useScanReceipt.ts

# Backend related files
touch backend/{server.ts,controllers/receiptController.ts,models/Receipt.ts,routes/receiptRoutes.ts}

# Create test files
touch test/App.test.tsx

echo "Project structure created successfully!"
