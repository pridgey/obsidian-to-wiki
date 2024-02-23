import { App, Editor, MarkdownView, MarkdownRenderer, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

interface ObsidianToWikiSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: ObsidianToWikiSettings = {
	mySetting: 'default'
}

export default class ObsidianToWiki extends Plugin {
	settings: ObsidianToWikiSettings;

	async onload() {
		await this.loadSettings();

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('file-down', 'Export To Wiki Files', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			new Notice('This is a notice!');

			// console.log(editor.getSelection());
			// 	//editor.replaceSelection('Sample Editor Command');

			// 	const wrapper = document.createElement('div');
			// 	wrapper.style.display = 'hidden';
			// 	document.body.appendChild(wrapper);

			// 	await MarkdownRenderer.render(this.app, view.data, wrapper, "/", view);

				


			// 	const HTML = wrapper.innerHTML;
			// 	document.body.removeChild(wrapper);

			// 	console.log("Resulting HTML", HTML);
		});



		// // This adds a settings tab so the user can configure various aspects of the plugin
		// this.addSettingTab(new SampleSettingTab(this.app, this));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}