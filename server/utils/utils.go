package utils

import (
	"log"
	"os"
)

func GetEnvVar(varName string) string {
	env := os.Getenv(varName)
	if env == "" {
		log.Fatalf("Environment variable %v not set", varName)
	}
	return env
}

func GetEnvVarOrDefault(varName string, def string) string {
	env := os.Getenv(varName)
	if env == "" {
		return def
	}
	return env
}

func IsProduction() bool {
	return GetEnvVar("APP_ENV") == "production"
}
