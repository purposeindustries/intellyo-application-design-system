# Intellyo's Application Design System

Intellyo's frontend framework (or FeF as we call it), written in [React](https://reactjs.org). We created this repository to organise our components and have a consistent design style throughout our applications.

### Applications using FeF

- [Creator Engine](https://app.intellyo.com)
- [Research dashboard](https://research.intellyo.com)

## Component list:

Here you can find each of our components:

- [Accordion](/src/components/accordion)
- [Avatar](/src/components/avatar)
- [AvatarCard](/src/components/avatar-card)
- [AvatarEditor](/src/components/avatar-editor)
- [Box](/src/components/box)
- [Button](/src/components/button)
- [ButtonGroup](/src/components/button-group)
- [Caption](/src/components/caption)
- [Card](/src/components/card)
- [Chart](/src/components/chart)
- [ChartTraceSummaryItem](/src/components/chart-trace-summary-item)
- [Checkbox](/src/components/checkbox)
- [Col](/src/components/col)
- [Confirmation](/src/components/confirmation)
- [DisplayText](/src/components/display-text)
- [Dropdown](/src/components/dropdown)
- [DropdownItem](/src/components/dropdown-item)
- [EmptyView](/src/components/empty-view)
- [Heading](/src/components/heading)
- [HorizontallyScrollableRow](/src/components/horizontally-scrollable-row)
- [Icon](/src/components/icon)
- [Input](/src/components/input)
- [List](src/components/list)
- [LoadingButton](/src/components/loading-button)
- [Logo](/src/components/logo)
- [Modals](/src/components/modals)
- [MultiSelect](/src/components/multiselect)
- [Option](/src/components/option)
- [OptionSeparator](/src/components/option-separator)
- [OverlayTrigger](/src/components/overlay-trigger)
- [Popover](/src/components/popover)
- [PrefixedInput](/src/components/prefixed-input)
- [Row](/src/components/row)
- [Section](/src/components/section)
- [Select](/src/components/select)
- [Sidebar](/src/components/sidebar)
- [SocialPrefixedInput](/src/components/social-prefixed-input)
- [StackedAvatar](/src/components/stacked-avatar)
- [Subheading](/src/components/subheading)
- [Table](/src/components/table)
- [TabPanel](/src/components/tab-panel)
- [Tagsinput](/src/components/tagsinput)
- [Textarea](/src/components/textarea)
- [ToggleableTags](/src/components/toggleable-tags)
- [Tooltip](/src/components/tooltip)
- [withLimit](/src/components/with-limit)
- [Tile](/src/components/tile/index)

## E2E tests usage:

You can find the README.md in the [e2e](/e2e/) folder.

### Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs][homepage]

[homepage]: https://saucelabs.com

## License

MIT

## Deployment and release

[hubot](https://hubot.github.com) is here to rescue us all

### Release

```
hubot ci build intellyo-application-design-system@patch
```

Instead of patch you can use:
- premajor
- major
- preminor
- minor
- prepatch
- patch
- prerelease

This will create a new patch release and it'll deploy it automatically.

### Deployment

Deployment is handled by CircleCI, if you are deploying which was a patch, minor or major the new version will be published to the npm repository and rolled out to [http://intellyo.design/](intellyo.design). 
If you are deploying a prerelease, prepatch, preminor, premajor then it'll be published to npm but won't be rolled out [http://intellyo.design/](intellyo.design).

If you want to manually deploy a version, or roll back to previous one, you can do it:

```
hubot ci deploy intellyo-application-design-system@v1.0.1
```

### Force build

If the build fails because there's a broken e2e test, unit test or a lint issue you still can build a new version, you just need to force it. Force build still runs the tests but independently of their result the build will be marked as green. 

```
hubot ci force build intellyo-application-design-system@prepatch
```

To prevent any accidental executions you have to supply the daily villain (since you are doing a dangerous thing), but hubot is here to help you:

```
oroce: hubot ci force build intellyo-application-design-system@prepatch

hubot: oroce: You are trying to be a villain, aren't you?
       It's ok from time to time to be one, but you gotta know the safe word, today's one is: 
       *Scream*
       hubot ci force build intellyo-application-design-system@prepatch daily-villain=Scream
```

The daily villain is changed -as you'd guess- every day.

Since you used `force build`, probably your branch was failing. Even though we'll try to autodeploy it, it'll will too. So you need to `force deploy` it.

### Force deploy

If autodeploy fails, you can manually force it.

```
hubot ci force deploy intellyo-application-design-system@v1.0.1-0
```

You will supply the daily villain again, similarly to `force build`.

### Build from feature branch

Sometimes you want to create a new release from a feature branch (great for an rc, prelease, premajor), you can use both build and force build to do that as well.

```
hubot ci build intellyo-application-design-system#feat/breaking-change@prepatch
```

or 

```
hubot ci force build intellyo-application-design-system#feat/breaking-change@prepatch
```
