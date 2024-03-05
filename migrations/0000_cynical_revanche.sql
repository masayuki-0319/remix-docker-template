CREATE TABLE `kudos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`message` text NOT NULL,
	`style` json NOT NULL DEFAULT ('{"backgroundColor":"red","textColor":"white","emoji":"thumbsup"}'),
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	`author_id` int NOT NULL,
	`recipient_id` int NOT NULL,
	CONSTRAINT `kudos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`profile_url` varchar(255),
	`email` varchar(255) NOT NULL,
	`password` text NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `kudos` ADD CONSTRAINT `kudos_author_id_users_id_fk` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `kudos` ADD CONSTRAINT `kudos_recipient_id_users_id_fk` FOREIGN KEY (`recipient_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;