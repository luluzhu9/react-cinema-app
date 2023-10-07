terraform {
  required_version = "~> 1.6.0" # was 1.2.0, didn't support current version
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}