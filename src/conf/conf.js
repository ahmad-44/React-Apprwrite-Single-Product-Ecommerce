const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteCollectionId_Counter: String(
    import.meta.env.VITE_APPWRITE_COLLECTION_ID_COUNTER
  ),
  appwriteDocumentId_Counter: String(
    import.meta.env.VITE_APPWRITE_DOCUMENT_ID_COUNTER
  ),
};
export default conf;
