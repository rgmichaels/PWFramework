export const log = (message: string) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  };
  