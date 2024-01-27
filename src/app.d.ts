// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			pathname: string;
			metadata: Record<string, string>;
			articleCode: string;
		}

		// interface Platform {}
	}
}

export {};
