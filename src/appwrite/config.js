//Creation of orders will go here
import conf from "../conf/conf.js";
import { Client, ID, Databases, Query } from "appwrite";
import { sellingPrice } from "../constants/content.js";
import toast from "react-hot-toast";
export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createOrder({
    name,
    phone,
    address,
    city,
    email = "noemail@noemail.com",
    quantity,
  }) {
    try {
      // step 1,2,3 are for reading and updating the counter which is a separate collection, step 4 is used to create the order
      // Step 1: Fetch the counter document
      const counterDoc = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId_Counter, // Collection ID for counters
        conf.appwriteDocumentId_Counter // Document ID for the counter
      );

      // Step 2: Increment the order ID
      const newOrderId = counterDoc.currentOrderId + 1;

      // Step 3: Update the counter document
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId_Counter, // Collection ID for counters
        conf.appwriteDocumentId_Counter, // Document ID for the counter
        {
          currentOrderId: newOrderId,
        }
      );

      // Step 4: Create the new order
      const createdDocument = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          name,
          phone,
          address,
          city,
          email,
          quantity,
          price: sellingPrice * quantity,
          order_id: newOrderId,
          status: "Processing",
        }
      );
      toast.success("Order Created Successfully");
      return createdDocument;
    } catch (error) {
      console.log("Appwrite serive :: createOrder :: error", error);
      toast.error("Order Creation Failed");
    }
  }
  async getOrders() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.orderDesc("order_id")]
      );
    } catch (error) {
      console.log("Appwrite serive :: getOrder :: error", error);
      return false;
    }
  }

  async deleteOrder(id) {
    try {
      console.log(id);
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteOrder :: error", error);
      return false;
    }
  }
  async updateOrder(
    id,
    { name, phone, address, city, email, quantity, price, status }
  ) {
    quantity = Number(quantity);
    price = Number(price);
    try {
      const updatedDoc = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        {
          name,
          phone,
          address,
          city,
          email,
          quantity,
          price,
          status,
        }
      );
      toast.success("Order Updated Successfully");
      return updatedDoc;
    } catch (error) {
      console.log("Appwrite serive :: Update Order :: error", error);
      toast.error("Order Updation Failed");
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }
}

const service = new Service();
export default service;
