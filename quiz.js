const questions = [
    {
        question: "Which of the following are key characteristics of cloud computing? (Select all that apply)",
        options: [
            { text: "On-demand self-service", correct: true },
            { text: "Fixed resource allocation", correct: false },
            { text: "Resource pooling", correct: true },
            { text: "Rapid elasticity", correct: true },
            { text: "Manual service provisioning", correct: false }
        ],
        explanation: "Cloud computing is defined by the ability to provision resources on-demand, the pooling of resources to serve multiple customers, and rapid elasticity to scale resources based on demand."
    },
    {
        question: "Which of the following are correct definitions of IaaS, PaaS, and SaaS?",
        options: [
            { text: "IaaS provides virtualized infrastructure resources like servers and storage.", correct: true },
            { text: "PaaS provides a ready-to-use environment for application deployment and management.", correct: true },
            { text: "SaaS allows customers to manage both the software and infrastructure.", correct: false },
            { text: "IaaS is used only for running applications without managing infrastructure.", correct: false }
        ],
        explanation: "IaaS provides virtualized infrastructure resources (e.g., EC2), PaaS offers a platform for app development (e.g., AWS Elastic Beanstalk), and SaaS provides fully managed software (e.g., Microsoft 365) without requiring the customer to manage the infrastructure."
    },
    {
        question: "Which of the following scenarios would be best suited for a hybrid cloud deployment model?",
        options: [
            { text: "An e-commerce company using a public cloud for product catalogs and a private cloud for customer data.", correct: true },
            { text: "A company fully migrating to AWS for all its resources.", correct: false },
            { text: "A business using only on-premises hardware to run its applications.", correct: false },
            { text: "A start-up with unpredictable workloads and no need for private cloud resources.", correct: false }
        ],
        explanation: "A hybrid cloud deployment allows businesses to leverage both public and private clouds, optimizing for cost efficiency and security. This model is ideal for using public cloud for flexible resources and private cloud for sensitive data."
    },
    {
        question: "Which AWS services help ensure confidentiality, integrity, and availability in cloud security? (Select all that apply)",
        options: [
            { text: "AWS IAM", correct: true },
            { text: "AWS CloudTrail", correct: true },
            { text: "Amazon S3 Versioning", correct: true },
            { text: "AWS Auto Scaling", correct: false }
        ],
        explanation: "IAM ensures confidentiality by controlling access to resources, CloudTrail supports integrity by tracking changes, and S3 Versioning helps with availability by retaining different versions of objects. Auto Scaling relates to performance and scalability, not security."
    },
    {
        question: "Discuss the concept of 'least privilege' in IAM. Why is it important, and how can this principle be enforced in AWS environments? (Select all that apply)",
        options: [
            { text: "Granting full administrative access to all IAM users", correct: false },
            { text: "Using IAM roles for temporary access to AWS resources", correct: true },
            { text: "Assigning only the permissions necessary for users to perform their tasks", correct: true },
            { text: "Using IAM policies with broad access to all AWS resources", correct: false }
        ],
        explanation: "The principle of least privilege involves providing users with only the necessary permissions for their tasks. This reduces the risk of unauthorized access and potential security breaches. IAM roles and policies help enforce this principle by limiting the permissions granted."
    },
    {
        question: "Which AWS services work together to ensure high availability and fault tolerance for a web application? (Select all that apply)",
        options: [
            { text: "AWS Auto Scaling", correct: true },
            { text: "AWS IAM", correct: false },
            { text: "Amazon EC2", correct: true },
            { text: "Elastic Load Balancing (ELB)", correct: true }
        ],
        explanation: "Auto Scaling adjusts the number of EC2 instances based on demand, while ELB distributes incoming traffic across multiple EC2 instances. Together, these services ensure high availability and fault tolerance."
    },
    {
        question: "In which of the following use cases would you choose Amazon DynamoDB over Amazon RDS?",
        options: [
            { text: "Storing structured transactional data with complex queries", correct: false },
            { text: "Storing semi-structured or unstructured data that needs to scale horizontally", correct: true },
            { text: "Running complex SQL queries with joins and transactions", correct: false },
            { text: "Hosting a traditional relational database for financial applications", correct: false }
        ],
        explanation: "DynamoDB is a NoSQL database designed for high availability and scalability. It's ideal for applications that require low-latency reads and writes with semi-structured or unstructured data. RDS is better suited for relational data with complex queries."
    },
    {
        question: "Describe the concept of serverless computing with AWS Lambda. What are its advantages and limitations compared to traditional server-based applications?",
        options: [
            { text: "No server management required", correct: true },
            { text: "Continuous running of code without interruption", correct: false },
            { text: "Automatic scaling with traffic demand", correct: true },
            { text: "Fixed compute cost regardless of usage", correct: false }
        ],
        explanation: "AWS Lambda allows you to run code without managing servers. It scales automatically with traffic demand and only charges for the compute time your code actually consumes. Unlike traditional servers, it doesn't run continuously and has a limited execution time."
    },
    {
        question: "Which of the following AWS pricing models would be most suitable for a business with unpredictable resource demand?",
        options: [
            { text: "Reserved Instances", correct: false },
            { text: "Savings Plans", correct: false },
            { text: "On-Demand Pricing", correct: true },
            { text: "Spot Instances", correct: false }
        ],
        explanation: "On-demand pricing is ideal for businesses with fluctuating or unpredictable workloads because it allows them to pay only for what they use, without committing to long-term usage."
    },
    {
        question: "Which AWS services can help you manage cloud costs and optimize your AWS resources? (Select all that apply)",
        options: [
            { text: "AWS Cost Explorer", correct: true },
            { text: "AWS Trusted Advisor", correct: true },
            { text: "AWS Shield", correct: false },
            { text: "AWS CloudTrail", correct: false }
        ],
        explanation: "AWS Cost Explorer helps track and analyze AWS costs, while Trusted Advisor provides cost optimization recommendations. AWS Shield is for DDoS protection, and CloudTrail is for logging activities, not cost management."
    },
    {
        question: "What factors should be considered when calculating the Total Cost of Ownership (TCO) for a cloud solution versus an on-premises solution? (Select all that apply)",
        options: [
            { text: "Upfront hardware costs for on-premises infrastructure", correct: true },
            { text: "Data center space and power for on-premises deployment", correct: true },
            { text: "Long-term operational costs for cloud services", correct: true },
            { text: "Staff training costs for cloud service management", correct: false }
        ],
        explanation: "TCO includes both **CAPEX** (capital expenditure) and **OPEX** (operational expenditure). For cloud solutions, operational costs include usage fees, while for on-premises solutions, costs include hardware, power, and maintenance."
    },
     {
        question: "Which AWS service is best for hosting a virtual server that can be resized as needed?",
        options: [
            { text: "Amazon EC2", correct: true },
            { text: "Amazon S3", correct: false },
            { text: "Amazon Lambda", correct: false },
            { text: "Amazon RDS", correct: false }
        ],
        explanation: "Amazon EC2 provides resizable compute capacity in the cloud, allowing users to launch virtual servers and resize them as needed."
    },
    {
        question: "What is the primary difference between Amazon EC2 and AWS Lambda?",
        options: [
            { text: "EC2 requires server management, Lambda does not", correct: true },
            { text: "Lambda is for storage, EC2 is for compute", correct: false },
            { text: "Lambda can run only on specific instance types", correct: false },
            { text: "EC2 is serverless, Lambda requires a server", correct: false }
        ],
        explanation: "EC2 involves managing virtual servers, whereas AWS Lambda is a serverless compute service that automatically scales based on the demand for code execution."
    },
    {
        question: "Which AWS service provides object storage with high durability and scalability?",
        options: [
            { text: "Amazon EBS", correct: false },
            { text: "Amazon S3", correct: true },
            { text: "Amazon RDS", correct: false },
            { text: "Amazon Glacier", correct: false }
        ],
        explanation: "Amazon S3 is designed for scalable object storage with durability of 99.999999999%, ideal for backup, archiving, and serving static content."
    },
    {
        question: "What does AWS CloudFormation help you automate?",
        options: [
            { text: "Cloud security", correct: false },
            { text: "Infrastructure provisioning and management", correct: true },
            { text: "Database scaling", correct: false },
            { text: "Cost management", correct: false }
        ],
        explanation: "AWS CloudFormation is a service that helps automate the setup and management of AWS resources, such as EC2, RDS, and VPCs, through templates."
    },
    {
        question: "Which of the following AWS services is used to monitor resources and set alarms for performance metrics?",
        options: [
            { text: "Amazon CloudWatch", correct: true },
            { text: "Amazon EC2", correct: false },
            { text: "AWS CloudTrail", correct: false },
            { text: "AWS IAM", correct: false }
        ],
        explanation: "Amazon CloudWatch monitors AWS resources and applications in real time, allowing users to set alarms for performance metrics such as CPU usage and disk read/write operations."
    },
    {
        question: "Which type of AWS storage is best suited for backup and long-term data archival?",
        options: [
            { text: "Amazon S3", correct: false },
            { text: "Amazon Glacier", correct: true },
            { text: "Amazon EBS", correct: false },
            { text: "Amazon RDS", correct: false }
        ],
        explanation: "Amazon Glacier is designed for long-term archival storage with low retrieval costs, ideal for backup and data that doesn’t require frequent access."
    },
    {
        question: "Which service allows you to run containers without managing the underlying servers?",
        options: [
            { text: "AWS Lambda", correct: false },
            { text: "Amazon ECS", correct: true },
            { text: "Amazon EC2", correct: false },
            { text: "Amazon Lightsail", correct: false }
        ],
        explanation: "Amazon ECS (Elastic Container Service) allows users to run Docker containers at scale, without needing to manage the infrastructure behind them."
    },
    {
        question: "What is the primary purpose of Amazon Route 53?",
        options: [
            { text: "DNS management and domain registration", correct: true },
            { text: "Compute instance management", correct: false },
            { text: "Security management", correct: false },
            { text: "Storage management", correct: false }
        ],
        explanation: "Amazon Route 53 is a scalable Domain Name System (DNS) service that also offers domain registration and routing traffic to AWS services or external resources."
    },
    {
        question: "What is the main benefit of using an AWS Auto Scaling group?",
        options: [
            { text: "It automatically adjusts the size of your virtual machines based on traffic", correct: true },
            { text: "It schedules server shutdowns to reduce costs", correct: false },
            { text: "It encrypts all of your data at rest", correct: false },
            { text: "It provisions a fixed amount of storage for your instances", correct: false }
        ],
        explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances based on traffic patterns, ensuring that you only pay for the resources you need."
    },
    {
        question: "Which AWS service is used to manage user access and permissions to AWS resources?",
        options: [
            { text: "Amazon VPC", correct: false },
            { text: "AWS IAM", correct: true },
            { text: "Amazon CloudWatch", correct: false },
            { text: "Amazon S3", correct: false }
        ],
        explanation: "AWS IAM (Identity and Access Management) is used to control access to AWS services and resources by defining policies for users, groups, and roles."
    },
    {
        question: "Which AWS service helps automate the provisioning and configuration of AWS infrastructure?",
        options: [
            { text: "AWS CloudFormation", correct: true },
            { text: "AWS Lambda", correct: false },
            { text: "Amazon EC2", correct: false },
            { text: "Amazon RDS", correct: false }
        ],
        explanation: "AWS CloudFormation automates the creation and management of AWS resources using declarative templates, making it easier to manage and deploy infrastructure."
    },
    {
        question: "What is the primary difference between Amazon S3 and Amazon EBS?",
        options: [
            { text: "S3 is object storage, EBS is block storage", correct: true },
            { text: "EBS is object storage, S3 is block storage", correct: false },
            { text: "S3 is used for compute, EBS is used for storage", correct: false },
            { text: "Both are used for backup purposes", correct: false }
        ],
        explanation: "Amazon S3 provides object storage for storing and retrieving data, while Amazon EBS provides block storage that can be attached to EC2 instances for persistent storage."
    },
    {
        question: "Which AWS service is designed for monitoring the health and performance of your AWS resources?",
        options: [
            { text: "AWS CloudWatch", correct: true },
            { text: "AWS IAM", correct: false },
            { text: "Amazon Route 53", correct: false },
            { text: "Amazon EC2", correct: false }
        ],
        explanation: "AWS CloudWatch monitors AWS resources and applications in real-time and provides metrics, logs, and alarms to help optimize performance and availability."
    },
    {
        question: "Which service helps protect against DDoS attacks on your AWS resources?",
        options: [
            { text: "AWS Shield", correct: true },
            { text: "AWS WAF", correct: false },
            { text: "Amazon GuardDuty", correct: false },
            { text: "Amazon CloudFront", correct: false }
        ],
        explanation: "AWS Shield provides DDoS protection for AWS resources, safeguarding applications from large-scale attacks and ensuring business continuity."
    },
    {
        question: "Which of the following is a benefit of using Amazon Elastic Load Balancer (ELB)?",
        options: [
            { text: "Distributes incoming traffic across multiple instances", correct: true },
            { text: "Automatically scales compute resources based on traffic", correct: false },
            { text: "Provides secure cloud storage", correct: false },
            { text: "Encrypts data at rest", correct: false }
        ],
        explanation: "Amazon ELB distributes incoming traffic across multiple EC2 instances, improving availability and fault tolerance for web applications."
    },
    {
        question: "What is the purpose of Amazon VPC (Virtual Private Cloud)?",
        options: [
            { text: "Isolate and secure resources within AWS", correct: true },
            { text: "Manage application scaling", correct: false },
            { text: "Monitor resource utilization", correct: false },
            { text: "Provide serverless computing", correct: false }
        ],
        explanation: "Amazon VPC allows users to create isolated networks within AWS, providing control over IP address ranges, subnets, and routing tables."
    },
    {
        question: "Which of the following best describes the concept of 'elasticity' in cloud computing?",
        options: [
            { text: "The ability to grow and shrink resources based on demand", correct: true },
            { text: "The ability to store data indefinitely", correct: false },
            { text: "The ability to manage resources manually", correct: false },
            { text: "The ability to provide consistent performance", correct: false }
        ],
        explanation: "Elasticity refers to the ability to automatically scale resources up or down based on demand, ensuring cost-efficiency and performance optimization."
    },
    {
        question: "Which AWS service can be used to analyze large datasets and run complex queries in a cloud environment?",
        options: [
            { text: "Amazon Redshift", correct: true },
            { text: "Amazon RDS", correct: false },
            { text: "Amazon DynamoDB", correct: false },
            { text: "AWS Lambda", correct: false }
        ],
        explanation: "Amazon Redshift is a fully managed data warehouse service designed for fast and scalable analytics, allowing you to analyze large datasets and run complex SQL queries."
    },
    {
        question: "Which AWS service is ideal for provisioning and managing containerized applications?",
        options: [
            { text: "Amazon ECS", correct: true },
            { text: "AWS Lambda", correct: false },
            { text: "Amazon EC2", correct: false },
            { text: "Amazon S3", correct: false }
        ],
        explanation: "Amazon ECS (Elastic Container Service) is designed to run and manage Docker containers at scale, making it easier to deploy and manage containerized applications."
    },
    {
        question: "Which of the following AWS services is used to automate the deployment of applications without managing the infrastructure?",
        options: [
            { text: "AWS Elastic Beanstalk", correct: true },
            { text: "AWS Lambda", correct: false },
            { text: "Amazon EC2", correct: false },
            { text: "Amazon RDS", correct: false }
        ],
        explanation: "AWS Elastic Beanstalk is a Platform-as-a-Service (PaaS) that automates the deployment of applications while handling infrastructure management in the background."
    },
     {
        question: "Which AWS service is best for automating the setup of infrastructure using code?",
        options: [
            { text: "AWS CloudFormation", correct: true },
            { text: "Amazon EC2", correct: false },
            { text: "AWS Lambda", correct: false },
            { text: "Amazon S3", correct: false }
        ],
        explanation: "AWS CloudFormation allows you to define and provision AWS infrastructure using code, making it easier to deploy and manage resources automatically."
    },
    {
        question: "Which of the following is the primary function of AWS Identity and Access Management (IAM)?",
        options: [
            { text: "Managing user permissions and access to resources", correct: true },
            { text: "Scaling virtual machines based on demand", correct: false },
            { text: "Monitoring resource performance", correct: false },
            { text: "Providing encryption for storage", correct: false }
        ],
        explanation: "AWS IAM is used to control access to AWS services and resources securely by creating users, groups, and assigning roles and policies."
    },
    {
        question: "What is the main advantage of using Amazon CloudFront?",
        options: [
            { text: "Improving content delivery speed by caching content closer to users", correct: true },
            { text: "Automatically scaling EC2 instances", correct: false },
            { text: "Storing backup data in a secure cloud environment", correct: false },
            { text: "Providing a serverless compute environment", correct: false }
        ],
        explanation: "Amazon CloudFront is a Content Delivery Network (CDN) that caches content at edge locations worldwide, speeding up delivery and reducing latency for users."
    },
    {
        question: "Which AWS service is designed for running relational databases in the cloud?",
        options: [
            { text: "Amazon RDS", correct: true },
            { text: "Amazon DynamoDB", correct: false },
            { text: "Amazon S3", correct: false },
            { text: "Amazon EC2", correct: false }
        ],
        explanation: "Amazon RDS (Relational Database Service) provides a managed environment for running relational databases like MySQL, PostgreSQL, and Oracle in the cloud."
    },
    {
        question: "What type of cloud model is Amazon Web Services (AWS) considered?",
        options: [
            { text: "Public Cloud", correct: true },
            { text: "Private Cloud", correct: false },
            { text: "Hybrid Cloud", correct: false },
            { text: "Community Cloud", correct: false }
        ],
        explanation: "AWS is a public cloud service, meaning its infrastructure and resources are provided by AWS to the public and are available for use by any organization."
    },
    {
        question: "Which service helps automate the scaling of web applications by adjusting the number of instances based on demand?",
        options: [
            { text: "Amazon Elastic Load Balancing (ELB)", correct: false },
            { text: "AWS Auto Scaling", correct: true },
            { text: "Amazon VPC", correct: false },
            { text: "Amazon CloudWatch", correct: false }
        ],
        explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances to match demand, ensuring applications remain responsive while optimizing cost efficiency."
    },
    {
        question: "Which AWS service provides a fully managed Kubernetes environment for running containerized applications?",
        options: [
            { text: "Amazon EKS", correct: true },
            { text: "Amazon ECS", correct: false },
            { text: "Amazon Lambda", correct: false },
            { text: "Amazon EC2", correct: false }
        ],
        explanation: "Amazon EKS (Elastic Kubernetes Service) provides a fully managed Kubernetes service, making it easier to run containerized applications using Kubernetes."
    },
    {
        question: "Which of the following is a use case for AWS Elastic Beanstalk?",
        options: [
            { text: "Deploying and managing applications in a managed environment", correct: true },
            { text: "Scaling EC2 instances based on CPU usage", correct: false },
            { text: "Storing large amounts of data securely", correct: false },
            { text: "Delivering content through a CDN", correct: false }
        ],
        explanation: "AWS Elastic Beanstalk is a Platform-as-a-Service (PaaS) that automatically handles application deployment, from capacity provisioning to load balancing, and scaling."
    },
    {
        question: "Which AWS service is primarily used for real-time monitoring and management of AWS cloud resources?",
        options: [
            { text: "Amazon CloudWatch", correct: true },
            { text: "Amazon EC2", correct: false },
            { text: "AWS IAM", correct: false },
            { text: "Amazon S3", correct: false }
        ],
        explanation: "Amazon CloudWatch monitors AWS resources and applications in real-time, providing metrics, logs, and alarms to help optimize performance and availability."
    },
    {
        question: "Which of the following is a benefit of using Amazon RDS (Relational Database Service)?",
        options: [
            { text: "Managed database scaling, backup, and patching", correct: true },
            { text: "Unlimited data storage without limits", correct: false },
            { text: "Serverless compute resources", correct: false },
            { text: "Automated web hosting and content delivery", correct: false }
        ],
        explanation: "Amazon RDS provides a managed database service with features such as automated backups, patching, and scaling, freeing up users from the operational burden of database management."
    },
     {
        question: "Which AWS service provides a platform for building and deploying applications without managing the underlying infrastructure?",
        options: [
            { text: "Amazon EC2", correct: false },
            { text: "AWS Lambda", correct: false },
            { text: "AWS Elastic Beanstalk", correct: true },
            { text: "Amazon RDS", correct: false }
        ],
        explanation: "AWS Elastic Beanstalk is a Platform-as-a-Service (PaaS) that automates the deployment of applications, managing the underlying infrastructure while developers focus on writing code."
    },
    {
        question: "Which AWS service helps you manage and control user permissions across AWS resources?",
        options: [
            { text: "Amazon VPC", correct: false },
            { text: "AWS IAM", correct: true },
            { text: "AWS Shield", correct: false },
            { text: "Amazon S3", correct: false }
        ],
        explanation: "AWS IAM (Identity and Access Management) allows you to control who has access to your AWS resources, managing permissions, policies, and roles."
    },
    {
        question: "What is the main advantage of using AWS Spot Instances?",
        options: [
            { text: "They provide guaranteed uptime for critical workloads", correct: false },
            { text: "They offer significant cost savings for interruptible workloads", correct: true },
            { text: "They are ideal for production databases", correct: false },
            { text: "They are automatically scaled based on demand", correct: false }
        ],
        explanation: "AWS Spot Instances allow you to bid for unused EC2 capacity, offering significant savings for workloads that can tolerate interruptions, such as batch processing."
    },
    {
        question: "Which of the following AWS services provides a managed NoSQL database solution?",
        options: [
            { text: "Amazon RDS", correct: false },
            { text: "Amazon DynamoDB", correct: true },
            { text: "Amazon Redshift", correct: false },
            { text: "Amazon Aurora", correct: false }
        ],
        explanation: "Amazon DynamoDB is a fully managed NoSQL database service designed for high availability and scalability, ideal for applications with large amounts of unstructured data."
    },
    {
        question: "What is the primary function of AWS Elastic Load Balancing (ELB)?",
        options: [
            { text: "To automatically scale EC2 instances based on traffic", correct: false },
            { text: "To distribute incoming traffic across multiple EC2 instances", correct: true },
            { text: "To monitor the health of EC2 instances", correct: false },
            { text: "To store and back up data from EC2 instances", correct: false }
        ],
        explanation: "Amazon ELB distributes incoming application traffic across multiple EC2 instances, ensuring no single instance is overwhelmed and improving the fault tolerance of the application."
    },
    {
        question: "Which AWS service helps store large amounts of data for archiving and long-term backup?",
        options: [
            { text: "Amazon S3", correct: false },
            { text: "Amazon Glacier", correct: true },
            { text: "Amazon EBS", correct: false },
            { text: "Amazon RDS", correct: false }
        ],
        explanation: "Amazon Glacier is a low-cost storage service designed for data archiving and long-term backup, offering retrieval times ranging from minutes to hours."
    },
    {
        question: "Which of the following AWS services is used for automating security monitoring and threat detection in your AWS environment?",
        options: [
            { text: "Amazon GuardDuty", correct: true },
            { text: "AWS WAF", correct: false },
            { text: "AWS Shield", correct: false },
            { text: "Amazon Inspector", correct: false }
        ],
        explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior within your AWS environment."
    },
    {
        question: "Which AWS service is best for storing and analyzing large amounts of structured data for business intelligence (BI) applications?",
        options: [
            { text: "Amazon Redshift", correct: true },
            { text: "Amazon DynamoDB", correct: false },
            { text: "Amazon S3", correct: false },
            { text: "Amazon EC2", correct: false }
        ],
        explanation: "Amazon Redshift is a fully managed data warehouse service that allows you to analyze large datasets quickly and cost-effectively using standard SQL queries."
    },
    {
        question: "Which AWS service provides secure communication between cloud resources and on-premises data centers?",
        options: [
            { text: "AWS Direct Connect", correct: true },
            { text: "Amazon VPC", correct: false },
            { text: "Amazon CloudFront", correct: false },
            { text: "AWS VPN", correct: false }
        ],
        explanation: "AWS Direct Connect allows you to establish a dedicated network connection from your on-premises data center to AWS, ensuring secure and high-speed communication."
    },
    {
        question: "Which of the following is a benefit of using AWS Auto Scaling?",
        options: [
            { text: "It reduces the number of EC2 instances in response to demand", correct: false },
            { text: "It automatically adjusts the number of EC2 instances based on traffic", correct: true },
            { text: "It schedules regular backups of your EC2 instances", correct: false },
            { text: "It encrypts data at rest on your EC2 instances", correct: false }
        ],
        explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances in response to real-time demand, ensuring that your application remains available and cost-efficient."
    },
    {
        question: "Which of the following AWS services is used for automating the scaling of EC2 instances?",
        options: [
            { text: "AWS Auto Scaling", correct: true },
            { text: "Amazon Route 53", correct: false },
            { text: "AWS Lambda", correct: false },
            { text: "AWS CloudFormation", correct: false }
        ],
        explanation: "AWS Auto Scaling automatically adjusts the number of EC2 instances based on real-time traffic, ensuring availability and optimizing costs."
    },
    {
        question: "Which AWS service is used to provide dedicated network connections from an on-premises data center to AWS?",
        options: [
            { text: "AWS Direct Connect", correct: true },
            { text: "Amazon VPC", correct: false },
            { text: "Amazon S3", correct: false },
            { text: "Amazon CloudFront", correct: false }
        ],
        explanation: "AWS Direct Connect allows you to establish a dedicated network connection from your on-premises data center to AWS, offering more consistent performance."
    },
    {
        question: "Which AWS service allows you to host static websites with low latency and high data transfer speeds?",
        options: [
            { text: "Amazon S3", correct: true },
            { text: "Amazon EC2", correct: false },
            { text: "AWS Lambda", correct: false },
            { text: "Amazon CloudFront", correct: false }
        ],
        explanation: "Amazon S3 can be used to host static websites, while Amazon CloudFront can be used to cache content closer to users, improving access speeds."
    },
    {
        question: "Which AWS service is specifically designed for hosting relational databases in a fully managed environment?",
        options: [
            { text: "Amazon DynamoDB", correct: false },
            { text: "Amazon RDS", correct: true },
            { text: "Amazon Redshift", correct: false },
            { text: "Amazon EC2", correct: false }
        ],
        explanation: "Amazon RDS (Relational Database Service) provides a fully managed relational database service for popular databases like MySQL, PostgreSQL, and Oracle."
    },
    {
        question: "Which AWS service is used to distribute traffic across multiple availability zones and ensure fault tolerance for web applications?",
        options: [
            { text: "AWS Lambda", correct: false },
            { text: "Amazon Route 53", correct: false },
            { text: "Elastic Load Balancing (ELB)", correct: true },
            { text: "Amazon S3", correct: false }
        ],
        explanation: "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple EC2 instances in different Availability Zones, improving fault tolerance."
    },
    {
        question: "Which AWS service provides real-time threat detection and continuous security monitoring?",
        options: [
            { text: "Amazon GuardDuty", correct: true },
            { text: "AWS CloudTrail", correct: false },
            { text: "Amazon Inspector", correct: false },
            { text: "AWS IAM", correct: false }
        ],
        explanation: "Amazon GuardDuty provides continuous security monitoring and threat detection for your AWS environment, helping you identify malicious activity and unauthorized access."
    },
    {
        question: "Which service would you use to create a scalable storage solution for archiving and long-term backup?",
        options: [
            { text: "Amazon Glacier", correct: true },
            { text: "Amazon S3", correct: false },
            { text: "Amazon EBS", correct: false },
            { text: "AWS Lambda", correct: false }
        ],
        explanation: "Amazon Glacier is a low-cost archival storage solution designed for long-term backups and data archiving, with retrieval times ranging from minutes to hours."
    },
    {
        question: "Which AWS service helps you automate security assessments to identify vulnerabilities in your AWS environment?",
        options: [
            { text: "Amazon Inspector", correct: true },
            { text: "Amazon EC2", correct: false },
            { text: "AWS CloudTrail", correct: false },
            { text: "AWS WAF", correct: false }
        ],
        explanation: "Amazon Inspector automatically assesses AWS resources for vulnerabilities, helping identify security risks and ensuring compliance with security best practices."
    },
    {
        question: "What is the primary function of AWS CloudTrail?",
        options: [
            { text: "It records and logs all API calls made within an AWS account", correct: true },
            { text: "It helps configure security groups", correct: false },
            { text: "It automates scaling of EC2 instances", correct: false },
            { text: "It distributes traffic to multiple instances", correct: false }
        ],
        explanation: "AWS CloudTrail records and logs all API calls made within an AWS account, helping with governance, compliance, and security analysis."
    },
    {
        question: "Which AWS service helps automate the deployment and scaling of containerized applications?",
        options: [
            { text: "Amazon EC2", correct: false },
            { text: "Amazon ECS", correct: true },
            { text: "AWS Lambda", correct: false },
            { text: "Amazon CloudFront", correct: false }
        ],
        explanation: "Amazon ECS (Elastic Container Service) is used to run and scale containerized applications, simplifying the management of Docker containers on AWS."
    }
];
let currentQuestionIndex = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];

    // Clear previous question
    questionContainer.innerHTML = '';

    // Display current question
    let questionHTML = `<div class="question">
                            <p>${currentQuestionIndex + 1}. ${question.question}</p>
                            <div class="options">`;

    question.options.forEach((option, optIndex) => {
        questionHTML += `<input type="checkbox" id="q${currentQuestionIndex}opt${optIndex}" value="${option.text}"> ${option.text}<br>`;
    });

    questionHTML += `</div>
                     <div id="explanation${currentQuestionIndex}" class="explanation"></div>
                     </div>`;

    questionContainer.innerHTML = questionHTML;

    // Hide the "Next Question" button until answer is checked
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("check-btn").style.display = "inline";
    updateProgress();
}

function checkAnswer() {
    const explanation = document.getElementById(`explanation${currentQuestionIndex}`);
    const question = questions[currentQuestionIndex];
    let correctAnswers = question.options.filter(option => option.correct).map(option => option.text);
    let selectedAnswers = [];

    // Get selected answers
    question.options.forEach((option, optIndex) => {
        if (document.getElementById(`q${currentQuestionIndex}opt${optIndex}`).checked) {
            selectedAnswers.push(option.text);
        }
    });

    // Compare selected answers to correct ones
    if (JSON.stringify(correctAnswers.sort()) === JSON.stringify(selectedAnswers.sort())) {
        explanation.innerHTML = `<p class="correct">Correct! ${question.explanation}</p>`;
        document.getElementById("next-btn").style.display = "inline";
        document.getElementById("check-btn").style.display = "none";
    } else {
        explanation.innerHTML = `<p class="incorrect">Incorrect. The correct answers are: ${correctAnswers.join(', ')}. ${question.explanation}</p>`;
        document.getElementById("check-btn").disabled = false;
    }

    explanation.style.display = 'block';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        document.getElementById('next-btn').disabled = true;
        document.getElementById('next-btn').innerText = 'Quiz Completed';
    }
}

function updateProgress() {
    const progressText = document.getElementById('progress-text');
    const remainingQuestions = questions.length - (currentQuestionIndex + 1);
    progressText.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length} - ${remainingQuestions} remaining`;
}

// Initial load of the first question
loadQuestion();