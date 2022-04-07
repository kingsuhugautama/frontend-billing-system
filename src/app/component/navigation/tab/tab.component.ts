import { AfterContentChecked, AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { ActionButton } from '../../button/action-button/action-button.component';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterContentInit, AfterContentChecked {

    @ContentChildren(TabItemComponent) TabItemComp: QueryList<TabItemComponent>;

    TabItem$: Observable<TabItemComponent[]>;

    ActiveTab: TabItemComponent;

    @Output('onGetSelectedTab') onGetSelectedTab = new EventEmitter();

    @Input('ActionButton') ActionButton: ActionButton[] = [];

    CurrentActionButton: ActionButton[] = [];

    @Output('onClickActionButton') onClickActionButton = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        this.TabItem$ = this.TabItemComp.changes
            .pipe(startWith(''))
            .pipe(delay(0))
            .pipe(map(() => this.TabItemComp.toArray()));
    }

    ngAfterContentChecked(): void {
        if (!this.ActiveTab) {
            Promise.resolve().then(() => {
                this.ActiveTab = this.TabItemComp.first;
                this.onSetActionButtonPerTab(this.ActiveTab.TabLabelComp.Id);
            })
        }
    }

    onSelectTab(tab: TabItemComponent, id: string): void {
        if (this.ActiveTab === tab) {
            return;
        }

        if (this.ActiveTab) {
            this.ActiveTab.IsActive = false;
        }

        this.ActiveTab = tab;

        tab.IsActive = true;

        this.onSetActionButtonPerTab(id);

        this.onGetSelectedTab.emit(id);
    }

    onSetActionButtonPerTab(tabId: string): void {
        const data: ActionButton[] = [];

        this.ActionButton.forEach((item) => {
            if (item.tabId === tabId) {
                data.push(item);
            }
        });

        this.CurrentActionButton = data;
    }

    handleClickActionButton(id: string): void {
        this.onClickActionButton.emit(id);
    }
}
