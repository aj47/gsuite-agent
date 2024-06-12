# gsuite-agent

# High-Level Requirements for Task Management App

## Architecture
- **Frontend**: React Native Expo for the mobile/web app
- **Backend Infrastructure**: Managed and deployed with Terraform.
  - **AWS Integration**:
    - **DynamoDB**:
      - **Table**:
        - **Table Name**: `GSAAppData`
        - **Primary Key**: `PK` (String) - Partition Key
        - **Sort Key**: `SK` (String) - Sort Key
        - **Attributes**:
          - `PK` (String): Unique identifier for the primary partition key (e.g., `USER#<userId>`, `TASK#<taskId>`, `CHAT#<chatId>`).
          - `SK` (String): Unique identifier for the sort key (e.g., `TASK#<taskId>`, `MESSAGE#<messageId>`).
          - `DataType` (String): Type of data (e.g., `Task`, `Chat`).
          - `userId` (String): Identifier for the user (applies to both tasks and chats).
          - `name` (String): Name of the task (only for tasks).
          - `description` (String): Description of the task (only for tasks).
          - `dueDate` (String): Due date of the task (only for tasks).
          - `priority` (String): Priority level of the task (only for tasks).
          - `messageContent` (String): Content of the chat message (only for chats).
          - `timestamp` (String): Timestamp of the chat message (only for chats).
    - **Lambda/ApiGateway**:
        - **Authentication Endpoints**:
          - POST /register: Register a new user.
          - POST /login: Authenticate a user.
          - POST /logout: Log out a user.
        - **Task Endpoints**:
          - GET /tasks: Retrieve all tasks.
          - POST /tasks: Create a new task.
          - PUT /tasks/{id}: Update an existing task.
          - DELETE /tasks/{id}: Delete a task.
        - **Chat Endpoints**:
          - GET /chats: Retrieve chat sessions for the user.
          - POST /chats/start: Initiate a new chat session.
          - POST /chats/send: Send a new message in the current chat session.
          - WebRTC Integration:
            - **Peer-to-Peer Communication**: Establish a direct connection between users for real-time messaging.
            - **Signaling Server**: Utilize WebRTC signaling to establish and maintain peer connections.
            - **Data Channels**: Create WebRTC data channels for sending and receiving messages.
            - **Real-Time Updates**: Use WebRTC for real-time chat updates without refreshing the page.

  
      
## Frontend Screens
1. **Home Screen**: 
   - Overview of all tasks.
   - List of existing tasks with options to:
     - Add a new task.
     - Edit an existing task.
     - Delete a task.
     - View task details.
   - Form to input task details (name, description, due date, priority) for adding or editing tasks.
   - Detailed view of a task with options to edit or delete.

2. **Chat Screen**:
   - List of chat messages.
   - Input field to send new messages.
   - Option to attach files or images.

3. **Settings Screen**:
   - User preferences and app settings.
   - Option to log out.

## API Endpoints
- **Authentication Endpoints**:
  - POST /register: Register a new user.
  - POST /login: Authenticate a user.
  - POST /logout: Log out a user.
  
- **Task Endpoints**:
  - GET /tasks: Retrieve all tasks.
  - POST /tasks: Create a new task.
  - PUT /tasks/{id}: Update an existing task.
  - DELETE /tasks/{id}: Delete a task.

- **Chat Endpoints**:
  - GET /chats: Retrieve chat messages.
  - POST /chats: Send a new chat message.
  - POST /chats/upload: Upload a file or image to chat.


## Additional Features
- **Offline Mode**: Implement offline capabilities with local storage. (localstack)
- **Push Notifications**: Integrate push notifications for real-time user updates.
- **Error Handling**: Robust error handling and user feedback for smooth user experience.

