import { Component, OnInit, OnDestroy } from '@angular/core';
import { StyleScriptService } from 'src/app/core/_services/common/styleScript.service';
import { BlogDirectoryData } from 'src/app/data/models/blog/blogDirectoryData';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BlogService } from 'src/app/core/_services/blog/blog.service';
import { Pagination } from 'src/app/data/models/common/pagination';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-blog-directory',
  templateUrl: './blog-directory.component.html',
  styleUrls: ['./blog-directory.component.css']
})
export class BlogDirectoryComponent implements OnDestroy, OnInit {
  subManager = new Subscription();
  blogDirData: BlogDirectoryData;
  filter: string = '';
  constructor(private styleService: StyleScriptService,
    private route: ActivatedRoute, private router: Router,
    private blogService: BlogService, private alertService: ToastrService) {
    
  }
  ngOnInit() {
    this.styleService.addStyle("blog-dir", '../../../../../../assets/wp-content/themes/munza/assets/css/pages/blog-dir.css');
    this.loadBlogDirData();
  }
  loadBlogDirData() {
    this.subManager.add(
      this.route.data.subscribe(data => {
        this.blogDirData = data.blogDirData;
      })
    );
  }
  ngOnDestroy() {
    this.styleService.removeStyle("blog-dir");
    this.subManager.unsubscribe();

  }

}
