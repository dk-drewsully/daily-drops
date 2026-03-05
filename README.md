# Figma API Project

A Node.js project for connecting to the Figma REST API.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create your `.env` file:**
   ```bash
   cp .env.example .env
   ```

3. **Add your Figma access token:**
   - Go to [Figma Settings > Personal Access Tokens](https://www.figma.com/developers/api#access-tokens)
   - Create a new token
   - Copy the token and add it to your `.env` file:
     ```
     FIGMA_ACCESS_TOKEN=your_actual_token_here
     ```

4. **(Optional) Add a Figma file key:**
   - Open any Figma file in your browser
   - Copy the file key from the URL: `figma.com/file/FILE_KEY/...`
   - Add it to your `.env` file:
     ```
     FIGMA_FILE_KEY=your_file_key_here
     ```

## Usage

Run the example script:
```bash
npm start
```

Or use watch mode for development:
```bash
npm run dev
```

## API Documentation

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Authentication Guide](https://www.figma.com/developers/api#authentication)

## Project Structure

```
figma-api-project/
├── index.js           # Main script with example API calls
├── package.json       # Project dependencies
├── .env              # Your environment variables (not committed)
├── .env.example      # Template for environment variables
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Security Notes

- Never commit your `.env` file or share your Figma access token
- The `.gitignore` file is configured to exclude `.env` from version control
- Tokens should be kept secret and rotated regularly
