provider "aws" {
  region = "us-west-1"
}

terraform {
  backend "s3" {
    bucket  = "app-cinema-tf-state-9"
    key     = "app-cinema.tfstate"
    region  = "us-west-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Lulu"
  }
}