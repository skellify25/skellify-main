type ClassValue = string | undefined | null | boolean | ClassValue[];

export const cn = (...args: ClassValue[]): string => {
    return args
        .flat()
        .filter((arg): arg is string => typeof arg === "string" && arg.length > 0)
        .join(" ");
};